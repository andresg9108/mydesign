var sFileLogs = './manyp.log';
const fs = require('fs');

module.exports = function(grunt) {
    // Python
    var aRoutePy = [
        './pages/*',
        './pageTemplates/*',
        './pages/autocompleteinput/*',
        './pages/autocompleteinput/autocompleteinput1/*',
        './pages/basicpage/*',
        './pages/basicpage/basicpage1/*',
        './pages/breadcrumb/*',
        './pages/breadcrumb/breadcrumb1/*',
        './pages/button/*',
        './pages/button/button1/*',
        './pages/centralizedcontainers/*',
        './pages/centralizedcontainers/centralizedcontainers1/*',
         './pages/checkbox/*',
         './pages/checkbox/checkbox1/*',
        './pages/containers/*',
        './pages/containers/containers1/*',
        './pages/example/*',
        './pages/floatheader/*',
        './pages/floatheader/floatheader1/*',
        './pages/floatheader/floatheader2/*',
        './pages/footer/*',
        './pages/footer/footer1/*',
        './pages/form/*',
        './pages/form/form1/*',
        './pages/itemselection/*',
        './pages/itemselection/itemselection1/*',
        './pages/loading/*',
        './pages/loading/loading1/*',
        './pages/loginmodels/*',
        './pages/loginmodels/loginmodel1/*',
        './pages/menu/*',
        './pages/menu/menu1/*',
        './pages/messages/*',
        './pages/messages/message1/*',
        './pages/modalwindow/*',
        './pages/modalwindow/modalwindow1/*',
        './pages/models/*',
        './pages/models/model1/*',
        './pages/pagination/*',
        './pages/pagination/pagination1/*',
        './pages/radiobutton/*',
        './pages/radiobutton/radiobutton1/*',
        './pages/selectionlist/*',
        './pages/selectionlist/selectionlist1/*',
        './pages/selectionmenu/*',
        './pages/selectionmenu/selectionmenu1/*',
        './pages/sidebar/*',
        './pages/sidebar/sidebar1/*',
        './pages/smarttable/*',
        './pages/smarttable/smarttable1/*',
        './pages/swiper/*',
        './pages/swiper/swiper1/*',
        './pages/swiper/swiper2/*',
        './pages/table/*',
        './pages/table/table1/*',
        './pages/text/*',
        './pages/text/text1/*',
        './pages/view/*',
        './pages/view/view1/*',
        './pages/view/view2/*'
    ];

    // Log
    var aLog = ['./processpy.log'];

    // Handlebars
    var aRouteHbs = ['./src/template/*'];
    var oRouteHbs = {
        'src/template/dist/main.js': ['src/template/*.hbs']
    };
    
    // Sass
    var aRouteSass = [
        './src/sass/*',
        './src/sass/imports/*',
        './src/sass/components/*',
        './src/sass/components/autocompleteinput/*',
        './src/sass/components/basicpage/*',
        './src/sass/components/breadcrumb/*',
        './src/sass/components/button/*',
        './src/sass/components/centralizedcontainers/*',
        './src/sass/components/checkbox/*',
        './src/sass/components/containers/*',
        './src/sass/components/floatheader/*',
        './src/sass/components/footer/*',
        './src/sass/components/form/*',
        './src/sass/components/itemselection/*',
        './src/sass/components/loading/*',
        './src/sass/components/loginmodels/*',
        './src/sass/components/menu/*',
        './src/sass/components/messages/*',
        './src/sass/components/modalwindow/*',
        './src/sass/components/models/*',
        './src/sass/components/pagination/*',
        './src/sass/components/radiobutton/*',
        './src/sass/components/selectionmenu/*',
        './src/sass/components/sidebar/*',
        './src/sass/components/smarttable/*',
        './src/sass/components/swiper/*',
        './src/sass/components/table/*',
        './src/sass/components/text/*',
        './src/sass/components/view/*'
    ];

    // Js
    var aRouteJs = ['./src/js/*'];
    var oRouteJs = {
        'src/js/dist/main.min.js': ['src/js/*.js']
    };

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
                    ext:    ".css"
                }]
            }
        },

        handlebars: {
          compile: {
            options: {
              namespace: 'Hbs'
            },
            files: oRouteHbs
          }
        },

        uglify: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: oRouteJs
            }
        },

        copy: {
            css_dist: {
                expand: true,
                cwd: 'src/css/dist/',
                src: ["main.css", "main.css.map"],
                dest: 'dist/'
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

        watch: {
            files: ['*.*'],
            options: {
                nospawn: true,
                livereload: {
                    host: 'localhost',
                    port: 35729
                }
            },
            task_py: {
                files: aRoutePy,
                tasks: ['process-html']
            },
            task_log: {
                files: aLog
            },
            task_sass: {
                files: aRouteSass,
                tasks: ['sass', 'copy']
            },
            task_handlebars: {
                files: aRouteHbs,
                tasks: ['handlebars']
            },
            task_js:{
                files: aRouteJs,
                tasks: ['uglify']
            }
        }
        
    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-processpy');
};