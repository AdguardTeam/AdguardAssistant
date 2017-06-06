const gulp = require('gulp');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const browserSync = require('browser-sync');

module.exports = () => {
    const options = global.options || {};

    watch(options.src + '**/*.{css,js,html}', batch(function(events, done) {
        runSequence('dev', done);
    }));

    browserSync.init({
        server: {
            baseDir: './build/'
        }
    });

    gulp.watch(options.outputPath + '/assistant.user.js').on('change', browserSync.reload);
    gutil.log(gutil.colors.green('Watcher is running...'));
};
