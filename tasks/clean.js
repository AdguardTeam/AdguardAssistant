/**
 * Clean build folder.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const clean = require('gulp-clean');

module.exports = () => {
    const options = global.options || {};

    gutil.log('Cleaning ' + options.outputPath);

    return gulp.src(options.outputPath)
        .pipe(clean());
};
