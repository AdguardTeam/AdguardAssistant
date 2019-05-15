import fs from 'fs';
import gulp from 'gulp';

import compile from './compile';
import restoreMeta from './restore-meta';
import clean from './clean';
import preprocess from './preprocess';
import uglify from './uglify';
import downloadLocalization from './download-localization';
import appendLocales from './append-locales';
import updateMetaLocales from './update-meta-locales';
import css from './css';
import uploadEnLocale from './upload-base-locale';
import uploadBaseMetaLocale from './upload-base-meta-locale';
import watch from './watch';

const options = global.options = {
    src: 'src',
    scriptName: 'assistant',
    metaBuild: 'compiler.meta.build.js',
    metaBeta: 'compiler.meta.beta.js',
    metaDev: 'compiler.meta.dev.js',
    downloadUpdateUrlBuild: 'https://userscripts.adtidy.org/release/assistant/4.3/',
    downloadUpdateUrlBeta: 'https://userscripts.adtidy.org/beta/assistant/4.3/',
    downloadUpdateUrlDev: 'https://AdguardTeam.github.io/AdguardAssistant/',
    outputPath: 'build',
    locales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'tr', 'ja', 'es', 'pt-BR', 'pt-PT', 'ar', 'ko', 'sk', 'no', 'da', 'fr', 'id', 'sv', 'sr-Latn', 'cs', 'sl-SI', 'be-BY'],
    metaLocales: ['en', 'ru', 'uk', 'pl', 'de', 'zh-CN', 'zh-TW', 'he', 'it', 'fa', 'tr', 'ja', 'es', 'pt-BR', 'pt-PT', 'ar', 'ko', 'sk', 'no', 'da', 'fr', 'id', 'sv', 'sr-Latn', 'cs', 'sl-SI', 'be-BY'],
    localesDir: 'locales',
    sourceFile: 'en.json',
    sourceFileMeta: 'en.meta.json',
    debug: true,
    metaPath: null,
    ext: '.user.js'
};

options.languagesFiles = options.locales.reduce(function (p, c) {
    p.push('src/_locales/' + c + '.js');
    return p;
}, []);

options.version = JSON.parse(fs.readFileSync('./package.json')).version;

export const buildBeta = (done) => {
    options.debug = false;
    options.metaPath = options.metaBeta;
    options.fileName = options.scriptName + '.user.js';
    return gulp.series(updateMetaLocales, css, compile, preprocess, uglify, restoreMeta, restoreMetaMin)(done);
};

export const buildDev = (done) => {
    options.metaPath = options.metaDev;
    options.fileName = options.scriptName + '.user.js';
    return gulp.series(updateMetaLocales, css, compile, preprocess, restoreMeta)(done);
};

export const buildEmbedded = (done) => {
    options.metaPath = options.metaDev;
    options.debug = false;
    options.embedded = true;
    options.fileName = options.scriptName + '.embedded.js';
    return gulp.series(clean, updateMetaLocales, css, compile, preprocess, uglify)(done);
};

const restoreMetaMin = (done) => {
    options.ext = '.user.min.js';
    gulp.series(restoreMeta)(done);
};

export const buildRelease = (done) => {
    options.debug = false;
    options.metaPath = options.metaBuild;
    options.fileName = options.scriptName + '.user.js';
    return gulp.series(updateMetaLocales, css, compile, preprocess, uglify, restoreMeta, restoreMetaMin)(done);
};

export const downloadLocales = (done) => {
    gulp.series(downloadLocalization, appendLocales, updateMetaLocales)(done);
};

export const testsToGhPages = () => {
    return gulp.src([
        'test/**',
        'node_modules/mocha/mocha.*',
        'node_modules/chai/chai.js'
    ]).pipe(gulp.dest(options.outputPath + '/test/'));
};

export const uploadLocales = (done) => {
    console.log(options);
    gulp.series(uploadEnLocale, uploadBaseMetaLocale)(done);
};

export { watch, clean };
