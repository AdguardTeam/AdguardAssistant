const fs = require('fs');
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
    locales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'tr', 'ja', 'es-419', 'pt-BR', 'pt-BR', 'pt-PT', 'ar', 'ko'],
    metaLocales: ['ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'sr', 'es', 'id', 'tr', 'ja', 'es-419', 'pt-BR', 'pt-PT', 'ar', 'ko'],
    localesDir: 'locales',
    sourceFile: 'en.json',
    sourceFileMeta: 'en.meta.json',
    debug: false,
    metaPath: null
};

options.languagesFiles = options.locales.reduce(function(p,c) {
    p.push('src/_locales/' + c + '.js');
    return p;
}, []);

options.version = JSON.parse(fs.readFileSync('./package.json')).version;

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

gulp.task('mobile', () => {
    options.debug = true;
    options.scriptName = 'script';
    runSequence('clean', 'css-mobile', 'compile-mobile', 'preprocess');
});

gulp.task('build', () => {
    options.debug = false;
    options.metaPath = options.metaBuild;
    runSequence('clean', 'css', 'compile', 'preprocess', 'uglify', 'restore-meta');
});

gulp.task('mobile-build', () => {
    options.debug = true;
    options.scriptName = 'script';
    runSequence('css-mobile', 'compile-mobile', 'preprocess', 'uglify');
});

gulp.task('locales', () => {
    runSequence('download-localization', 'append-locales', 'update-meta-locales');
});

gulp.task('testsToGhPages', () => {
    return gulp.src([
        'test/**',
        'node_modules/mocha/mocha.*',
        'node_modules/chai/chai.js'
    ]).pipe(gulp.dest(options.outputPath + '/test/'));
});

gulp.task('mobileToGhPages', () => {
    return gulp.src('build/**').pipe(gulp.dest(options.outputPath + '/mobile/'));
});


gulp.task('compile', require('./tasks/compile'));
gulp.task('compile-mobile', require('./tasks/compile.mobile'));
gulp.task('restore-meta', require('./tasks/restore-meta'));
gulp.task('clean', require('./tasks/clean'));
gulp.task('preprocess', require('./tasks/preprocess'));
gulp.task('uglify', require('./tasks/uglify'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('watch-mobile', require('./tasks/watch-mobile'));
gulp.task('download-localization', require('./tasks/download-localization'));
gulp.task('append-locales', require('./tasks/append-locales'));
gulp.task('update-meta-locales', require('./tasks/update-meta-locales'));
gulp.task('css', require('./tasks/css'));
gulp.task('css-mobile', require('./tasks/css-mobile'));
