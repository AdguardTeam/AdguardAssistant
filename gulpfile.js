const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaBuild: 'compiler.meta.build.js',
    metaBeta: 'compiler.meta.beta.js',
    metaDev: 'compiler.meta.dev.js',
    downloadUpdateUrlBuild: 'https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.0/',
    downloadUpdateUrlBeta: 'https://cdn.adguard.com/public/Userscripts/Beta/AdguardAssistant/4.0/',
    downloadUpdateUrlDev: 'https://AdguardTeam.github.io/AdguardAssistant/',
    outputPath: 'build',
    locales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-cn', 'he', 'it', 'fa'],
    metaLocales: ['ru', 'uk', 'pl', 'de', 'zh-cn', 'he', 'it', 'fa', 'sr', 'es', 'id'],
    localesDir: 'locales',
    sourceFile: 'en.json',
    sourceFileMeta: 'en.meta.json',
    debug: false,
    metaPath: null
};


gulp.task('beta', () => {
    options.debug = true;
    options.metaPath = options.metaBeta;
    runSequence('css', 'compile', 'preprocess', 'restore-meta');
});

gulp.task('dev', () => {
    options.debug = true;
    options.metaPath = options.metaDev;
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

gulp.task('testsToGhPages', () => {
    return gulp.src([
        'test/**',
        'node_modules/mocha/mocha.*',
        'node_modules/chai/chai.js'
    ], {base:"."})
        .pipe(gulp.dest(options.outputPath));
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
