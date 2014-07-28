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
      production: {
        options: {
          nokey: true,
          url: "http://benpaddock.net",
//          paths: [],
          locale: "en_GB",
          strategy: "desktop",
          threshold: 90
        }
      }
    }
  });
  /*global require:false*/
  require("matchdep").filterDev("grunt-!(template)*").forEach(grunt.loadNpmTasks);

  grunt.registerTask("ci", ["jshint", "pagespeed"]);
};
