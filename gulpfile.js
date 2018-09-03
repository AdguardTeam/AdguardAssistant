const fs = require('fs');
const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaBuild: 'compiler.meta.build.js',
    metaBeta: 'compiler.meta.beta.js',
    metaDev: 'compiler.meta.dev.js',
    downloadUpdateUrlBuild: 'https://cdn.adguard.com/public/Userscripts/AdguardAssistant/4.2/',
    downloadUpdateUrlBeta: 'https://cdn.adguard.com/public/Userscripts/Beta/AdguardAssistant/4.2/',
    downloadUpdateUrlDev: 'https://AdguardTeam.github.io/AdguardAssistant/',
    outputPath: 'build',
    locales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'tr', 'ja', 'es', 'pt-BR', 'pt-PT', 'ar', 'ko', 'sk', 'no', 'da', 'fr', 'id', 'sv', 'sr-Latn'],
    metaLocales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'tr', 'ja', 'es', 'pt-BR', 'pt-PT', 'ar', 'ko', 'sk', 'no', 'da', 'fr', 'id', 'sv', 'sr-Latn'],
    localesDir: 'locales',
    sourceFile: 'en.json',
    sourceFileMeta: 'en.meta.json',
    debug: true,
    metaPath: null,
    ext: '.user.js'
};

options.languagesFiles = options.locales.reduce(function(p,c) {
    p.push('src/_locales/' + c + '.js');
    return p;
}, []);

options.version = JSON.parse(fs.readFileSync('./package.json')).version;

gulp.task('beta', () => {
    options.metaPath = options.metaBeta;
    runSequence('update-meta-locales', 'css', 'compile', 'preprocess', 'restore-meta');
});

gulp.task('dev', () => {
    options.metaPath = options.metaDev;
    options.fileName = options.scriptName + '.user.js';
    runSequence('update-meta-locales', 'css', 'compile', 'preprocess', 'restore-meta');
});

gulp.task('embedded', () => {
    options.metaPath = options.metaDev;
    options.debug = false;
    options.embedded = true;
    options.fileName = options.scriptName + '.embedded.js';
    runSequence('update-meta-locales', 'css', 'compile', 'preprocess', 'uglify');
});

gulp.task('build', () => {
    options.debug = false;
    options.metaPath = options.metaBuild;
    options.fileName = options.scriptName + '.user.js';
    runSequence('update-meta-locales', 'css', 'compile', 'preprocess', 'uglify', 'restore-meta', 'restore-meta-min');
});

gulp.task('restore-meta-min', () => {
    options.ext = '.user.min.js';
    runSequence('restore-meta');
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
