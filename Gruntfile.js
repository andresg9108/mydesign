module.exports = function(grunt) {
    // Route
    var aRoute = [
        './web/*',
        './web/autocompleteinput/*',
        './web/basicpage/*',
        './web/breadcrumb/*',
        './web/button/*',
        './web/checkbox/*',
        './web/containers/*',
        './web/example/*',
        './web/floatheader/*',
        './web/floatheader/floatheader1/*',
        './web/form/*',
        './web/form/form1/*',
        './web/loginmodels/*',
        './web/loginmodels/loginmodel1/*',
        './web/modalwindow/*',
        './web/models/*',
        './web/models/model1/*',
        './web/pagination/*',
        './web/radiobutton/*',
        './web/selectionmenu/*',
        './web/sidebar/*',
        './web/sidebar/sidebar1/*',
        './web/text/*'
    ];
    
    // Sass
    var aRouteSass = [
        './src/sass/*',
        './src/sass/imports/*',
        './src/sass/components/*',
        './src/sass/components/floatheader/*',
        './src/sass/components/form/*',
        './src/sass/components/loginmodels/*',
        './src/sass/components/models/*'
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