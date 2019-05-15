/**
 * Uglify js.
 */

const path = require('path');
const gulp = require('gulp');
const minify = require('gulp-minify');

const uglify = () => {
    var userJsFileName = options.fileName;

    return gulp.src(path.join(options.outputPath, userJsFileName))
        .pipe(minify({
            mangle: false,
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('build'))
};

export default uglify;
