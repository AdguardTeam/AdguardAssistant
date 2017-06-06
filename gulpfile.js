const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaPath: 'compiler.meta.js',
    outputPath: 'build',
    locales: ['en', 'ru'],
    directoryName: 'locales_4',
    sourceFile: 'en.json'
};


gulp.task('dev', () => {
    runSequence('compile', 'preprocess', 'restore-meta');
});


gulp.task('build', () => {
    runSequence('clean', 'compile', 'preprocess', 'uglify', 'restore-meta');
});

gulp.task('locales', () => {
    runSequence('download-localization', 'append-locales');
});


gulp.task('compile', require('./tasks/compile'));
gulp.task('restore-meta', require('./tasks/restore-meta'));
gulp.task('clean', require('./tasks/clean'));
gulp.task('preprocess', require('./tasks/preprocess'));
gulp.task('uglify', require('./tasks/uglify'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('download-localization', require('./tasks/download-localization'));
gulp.task('append-locales', require('./tasks/append-locales'));
