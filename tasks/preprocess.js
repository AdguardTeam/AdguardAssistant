/**
 * Preprocessing for separation prod and debug build version.
 */

const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

module.exports = () => {
    const options = global.options || {};

    return gulp.src([options.outputPath + '/assistant.user.js', options.outputPath + '/script.js'])
        .pipe(preprocess({
            context: {
                DEBUG: options.debug,
                VERSION: 123
            }
        }))
        .pipe(gulp.dest(options.outputPath));
};
