/**
 * Uglify js.
 */

const gulp = require('gulp');
const uglify = require('gulp-uglify');

module.exports = () => {
    const options = global.options || {};

    return gulp.src(options.outputPath + '/*.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(options.outputPath));
};
