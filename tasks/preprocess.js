/**
 * Preprocessing for separation prod and debug build version.
 */

const gulp = require('gulp');
const gulpPreprocess = require('gulp-preprocess');

const preprocess = () => {
    const options = global.options || {};

    return gulp.src(options.outputPath + '/' + options.fileName, { allowEmpty: true })
        .pipe(gulpPreprocess({
            context: {
                DEBUG: options.debug,
                VERSION: options.version
            }
        }))
        .pipe(gulp.dest(options.outputPath));
};

export default preprocess;
