module.exports = function(grunt){

    grunt.initConfig({

        scripts:"public/assets/js/**/*.js",
        html:["public/**/*.html"],

        jshint: {
            src:["<%= scripts %>", "public/assets/app/**/*.js"]
        },

        watch:{
            scripts:{
                files:["<%= scripts %>", "public/assets/app/**/*.js"],
                tasks:['jshint'],
                options:{
                    spawn:true
                }
            },
            html:{
                files:"<%= html %>",
                tasks:['jshint'],
                options:{
                    spawn:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint','watch']);

}