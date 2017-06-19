const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaBuild: 'compiler.meta.build.js',
    metaBeta: 'compiler.meta.beta.js',
    outputPath: 'build',
    locales: ['en', 'ru'],
    metaLocales: ['ru', 'uk', 'de', 'sr', 'pl', 'zh-cn', 'it', 'es', 'id'],
    localesDir: 'locales_4',
    sourceFile: 'en.json',
    sourceFileMeta: 'en.meta.json',
    debug: false,
    metaPath: null
};


gulp.task('dev', () => {
    options.debug = true;
    options.metaPath = options.metaBeta;
    runSequence('css', 'compile', 'preprocess', 'restore-meta');
});


gulp.task('build', () => {
    options.debug = false;
    options.metaPath = options.metaBuild;
    runSequence('clean', 'css', 'compile', 'preprocess', 'uglify', 'restore-meta');
});

gulp.task('locales', () => {
    runSequence('download-localization', 'append-locales', 'update-meta-locales');
});


gulp.task('compile', require('./tasks/compile'));
gulp.task('restore-meta', require('./tasks/restore-meta'));
gulp.task('clean', require('./tasks/clean'));
gulp.task('preprocess', require('./tasks/preprocess'));
gulp.task('uglify', require('./tasks/uglify'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('download-localization', require('./tasks/download-localization'));
gulp.task('append-locales', require('./tasks/append-locales'));
gulp.task('update-meta-locales', require('./tasks/update-meta-locales'));
gulp.task('css', require('./tasks/css'));
