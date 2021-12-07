const fs = require('fs');
var oHtmlRoutes = require('./grunt/html/routes.js');
var oHbsRoutes = require('./grunt/hbs/routes.js');
var oHbsFiles = require('./grunt/hbs/files.js');
var oSassRoutes = require('./grunt/sass/routes.js');
var oJsRoutes = require('./grunt/js/routes.js');
var oJsFiles = require('./grunt/js/files.js');

// Log
var aLog = ['./processpy.log'];

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed', noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "src/sass/",
                    src:    ["*.sass"],
                    dest: "src/css/dist/",
                    ext:    ".min.css"
                }]
            }
        },

        handlebars: {
          compile: {
            options: {
              namespace: 'Hbs'
            },
            files: oHbsFiles.o
          }
        },

        uglify: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: oJsFiles.o
            }
        },

        processpy: {
            rts: [{
                folder: './pageTemplates',
                search: '<<ROOT-DIR>>',
                replace: '<<DIR>>'
            },{
                folder: './pages',
                search: '<<ROOT-DIR>>',
                replace: '<<DIR>>'
            }]
        },

        copy: {
            css_dist: {
                expand: true,
                cwd: 'src/css/dist/',
                src: ["main.min.css", "main.min.css.map"],
                dest: 'dist/'
            }
        },

        watch: {
            files: ['*.*'],
            options: {
                nospawn: true,
                livereload: {
                    host: 'localhost',
                    port: 35729
                }
            },
            task_log: {
                files: aLog
            },
            task_py: {
                files: oHtmlRoutes.a,
                tasks: ['process-html']
            },
            task_sass: {
                files: oSassRoutes.a,
                tasks: ['sass', 'copy']
            },
            task_handlebars: {
                files: oHbsRoutes.a,
                tasks: ['handlebars']
            },
            task_js:{
                files: oJsRoutes.a,
                tasks: ['uglify']
            }
        }
        
    });

    grunt.registerTask('default', ['watch']);
};