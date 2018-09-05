module.exports = function(grunt) {
    // Route
    var aRoute = [
        './web/containers/*',
        './web/sidebar/*',
        './web/pagination/*',
        './web/breadcrumb/*',
        './web/example/*',
        './web/modalwindow/*'
    ];
    
    // Sass
    var aRouteSass = [
        './src/sass/*',
        './src/sass/imports/*',
        './src/sass/components/*'
    ];
    
    // Js
    var aRouteJs = ['./src/js/*'];

    // load all grunt tasks
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
                    dest: "src/css/",
                    ext:    ".css"
                }]
            }
        },

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            load_route: {
                files: aRoute
            },
            load_sass: {
                files: aRouteSass,
                tasks: ['sass']
            },
            load_js: {
                files: aRouteJs
            }
        }
        
    });

    grunt.registerTask('tPy', function(){
        grunt.util.spawn({
            cmd: 'python',
            args: ['load.py', '-l'],
            opts: {stdio: 'inherit'},
        });
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};