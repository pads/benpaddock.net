/*global module:false*/
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      gruntfile: {
        src: "Gruntfile.js"
      }
    },
    exec: {
      twserve: {
        command: "tsapp serve",
        stdout: true
      },
      twpush: {
        command: "tsapp push_hard public",
        stdout: true
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: "http://benpaddock.net",
        paths: ["/About", "/CV", "/Portfolio", "/Links"],
        locale: "en_GB",
        threshold: 90
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      },
      desktop: {
        options: {
          strategy: "desktop"
        }
      }
    },
    sass: {
      development: {
        options: {
          style: "expanded",
          sourcemap: "true"
        },
        files: [
          {
            expand: true,
            cwd: "src/sass",
            src: ["*.scss"],
            dest: "assets",
            ext: ".css"
          }
        ]
      },
      production: {
        options: {
          style: "compressed"
        },
        files: [
          {
            expand: true,
            cwd: "src/sass",
            src: ["*.scss"],
            dest: "assets",
            ext: ".css"
          }
        ]
      }
    },
    autoprefixer: {
      options: {
        map: true
      },
      dist: {
        src: "assets/main.css",
        dest: "assets/main.css"
      }
    },
    watch: {
      sass: {
        files: "src/sass/*.scss",
        tasks: ["sass:development", "autoprefixer"],
        options: {
          livereload: true
        }
      }
    }
  });
  /*global require:false*/
  require("matchdep").filterDev("grunt-!(template)*").forEach(grunt.loadNpmTasks);

  grunt.registerTask("ci", ["jshint", "sass:production", "autoprefixer", "pagespeed"]);
  grunt.registerTask("default", ["jshint", "sass:development", "autoprefixer"]);
};
