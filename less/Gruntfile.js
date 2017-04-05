module.exports = function (grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt)({
        pluginsRoot: '../node_modules'
    });

	grunt.loadNpmTasks('grunt-parallel');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-freeport');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-image-embed');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-embed-fonts');

    grunt.initConfig({
        clean: ["skin"],

        newer: {
            options: {
                cache: 'skin/cache/'
            }
        },

        less: {
            files: [
                "style.less"
            ],
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFileInline: true,
                    outputSourceFiles: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: "<%= less.files %>",
                        dest: "skin/css",
                        ext: '.css'
                    }
                ]
            },
            prod: {
                options: {
                    yuicompress: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: "<%= less.files %>",
                        dest: "skin/css",
                        ext: '.css'
                    }
                ]
            }
        },


        postcss: {
            options: {
                map: {
                    inline: false
                },

                processors: [
                    require('autoprefixer-core')({browsers: '> 1%, last 3 versions, Firefox ESR, Opera 12.1'})
                ]
            },
            dev: {
                options: {
                    map: {
                        inline: false
                    }
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'skin/css/*.css',
                    dest: 'skin/css'
                }]
            },
            prod: {
                options: {
                    map: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'skin/css/*.css',
                    dest: 'skin/css'
                }]
            }
        },


        cmq: {
            options: {
                log: false
            },
            media: {
                files: {
                    'skin/css': ['skin/css/*.css']
                }
            }
        },

        csso: {
            compress: {
                options: {
                    report: 'gzip'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'skin/css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'skin/css/',
                        ext: '.css'
                    }
                ]
            }
        },

        imagemin: {
            dev: {
                files: [
                    {
                        expand: true,
                        src: ['i/**/*.{png,jpg,gif,svg,ico}'],
                        dest: 'skin/'
                    }
                ]
            }
        },

        imageEmbed: {
            dist: {
                src: [ "skin/css/style.css" ],
                dest: "skin/css/style.css"
            }
        },

        copy: {
			options: {
				// exclude binary format from the processContent function
				noProcess: ['**/*.{png,gif,jpg,ico,psd,ttf,otf,woff,svg}'],
				},
            dev: {
                files: [
                    {
                        expand: true,
                        src: ['fonts/**/*', 'video/**/*'],
                        dest: 'skin/'
                    }
                ]
            }
        },

        freeport: {
            port: {
                options: {
                    start: 9000,
                    end: 9900
                }
            }
        },

        php: {
            dev: {
                options: {
                    hostname: '127.0.0.1',
                    port: '<%= freeport.port %>',
                    base: '.'
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'skin/css/*.css',
                        'js/**/*.js',
                        '**/*.php'
                    ]
                },
                options: {
                    proxy: '<%= php.dev.options.hostname %>:<%= php.dev.options.port %>',
                    watchTask: true
                }
            }
        },


        parallel: {
            dev: {
                options: {
                    stream: true
                },
                tasks: [
                    {
                        grunt: true,
                        args: ['imagemin']
                    }, {
                        grunt: true,
                        args: ['compile', 'freeport:port', 'php', 'browserSync', 'watch']
                    }
                ]
            }
        },


        compress: {
            main: {
                options: {
                    archive: 'archive.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['**/*', '!archive.zip'],
                        dest: './'
                    }
                ]
            }
        },
		
		embedFonts: {
			all: 	{
				files: {
					'skin/css/style.css': ['skin/css/style.css']
				}
			}
		},


        watch: {
            css: {
                files: 'less/**/*.less',
                tasks: ['styles:dev']
            },
            images: {
                files: 'i/**/*.{png,jpg,gif,svg,ico}',
                tasks: ['newer:imagemin']
            },
            fonts: {
                files: ['fonts/**', 'video/**'],
                tasks: ['copy']
            }
        }

    });

    grunt.registerTask('styles:dev', ['less:dev', 'postcss:dev']);
    grunt.registerTask('styles:prod', ['less:prod', 'postcss:prod', 'csso']);

    grunt.registerTask('compile', ['clean', 'styles:dev', 'copy']);

    grunt.registerTask('build', ['clean', 'styles:prod', 'imagemin', 'imageEmbed', 'copy', 'compress']);
	grunt.registerTask('build:light', ['clean', 'styles:prod', 'imagemin', 'imageEmbed', 'copy', 'embedFonts']);

    grunt.registerTask('default', ['parallel:dev']);

};
