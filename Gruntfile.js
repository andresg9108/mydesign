const fs = require('fs');

var oCopyRoutes = require('./grunt/copy/routes.js');
var oCopyFiles = require('./grunt/copy/files.js');
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

        copy: oCopyFiles.o,

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
                files: oSassRoutes.a
            },
            task_copy: {
                files: oCopyRoutes.a,
                tasks: ['copy']
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