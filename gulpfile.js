const gulp = require('gulp');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const path = require('path');
const uglify = require('gulp-uglify');
const preprocess = require('gulp-preprocess');
const runSequence = require('run-sequence').use(gulp);
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const browserSync = require('browser-sync');

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaPath: 'compiler.meta.js',
    outputPath: 'build'
};


gulp.task('clean', () => {
    return gulp.src(options.outputPath)
        .pipe(clean());
});


gulp.task('watch', () => {
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
});


gulp.task('uglify', () => {
    return gulp.src(options.outputPath + '/assistant.user.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(options.outputPath));
});


gulp.task('preprocess', () => {
    return gulp.src(options.outputPath + '/assistant.user.js')
        .pipe(preprocess({
            context: {
                DEBUG: true
            }
        }))
        .pipe(gulp.dest(options.outputPath));
});


gulp.task('dev', () => {
    runSequence('compile', 'preprocess', 'restore-meta');
});


gulp.task('build', () => {
    runSequence('clean', 'compile', 'preprocess', 'uglify', 'restore-meta');
});


gulp.task('compile', require('./tasks/compile'));
gulp.task('restore-meta', require('./tasks/restore-meta'));
