/**
 * Watcher for updating build with code changes and opening local server for debug.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

module.exports = () => {
    const options = global.options || {};

    browserSync.init({
        server: {
            baseDir: './build/'
        }
    });

    gutil.log(gutil.colors.green('Watcher is running...'));

    return watch(options.src + '/**/*.{css,js,html}', () => {
        gulp.start('dev');
    });
};
