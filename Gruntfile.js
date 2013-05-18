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
        }
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ["jshint"]);
};