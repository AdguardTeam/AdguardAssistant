/**
 * Watcher for updating build with code changes and opening local server for debug.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const watch = require('gulp-watch');

module.exports = () => {
    const options = global.options || {};
    return watch(options.src + '/**/*.{less,js,html}', () => {
        gulp.start('mobile');
    });
};
