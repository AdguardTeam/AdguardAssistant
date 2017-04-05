module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {}
        },
        compile: {
            prod: {
                scriptName: 'assistant',
                metaPath: 'compiler.meta.js',
                outputPath: 'build'
            }
        },
        uglify: {
            prod: {
                options: {
                    mangle: false
                },
                files: {
                    'build/assistant.user.js': ['build/assistant.user.js']
                }
            }
        },
        'restore-meta': {
            prod: {
                metaPath: 'build/assistant.meta.js',
                outputPath: 'build/assistant.user.js'
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compile:prod', 'uglify:prod', 'restore-meta:prod']);
    grunt.registerTask('dev', ['compile:prod']);
};
