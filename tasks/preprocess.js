/**
 * Preprocessing for separation prod and debug build version.
 */

const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

module.exports = () => {
    const options = global.options || {};

    return gulp.src(options.outputPath + '/' + options.fileName)
        .pipe(preprocess({
            context: {
                DEBUG: options.debug,
                VERSION: options.version
            }
        }))
        .pipe(gulp.dest(options.outputPath));
};
