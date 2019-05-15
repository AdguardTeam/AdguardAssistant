/**
 * Update meta downloadLocales.
 */

const gulp = require('gulp');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');
const endOfLine = require('os').EOL;

const updateMetaLocales = () => {
    const options = global.options || {};

    let compilerMeta = fs.readFileSync('compiler.meta.template.js').toString();
    let compilerMetaBeta = compilerMeta;
    let compilerMetaDev = compilerMeta;
    let compilerMetaNames = [];
    let compilerMetaBetaNames = [];
    let compilerMetaDevNames = [];
    let compilerMetaDescriptions = [];

    options.metaLocales.forEach((language) => {
        if (language === 'en') return false;

        let localesMetaJSON = fs.readFileSync(path.join(options.localesDir, language + '.meta.json')).toString();

        if (localesMetaJSON.length) {
            localesMetaJSON = JSON.parse(localesMetaJSON);

            if (language === 'pt-BR') {
                language = 'pt';
            } else if (language === 'zh-CN') {
                language = 'zh';
            } else if (language === 'sr-Latn') {
                language = 'sr';
            } else if (language === 'be-BY') {
                language = 'be';
            } else if (language === 'sl-SI') {
                language = 'sl';
            }

            compilerMetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name);
            compilerMetaBetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Beta');
            compilerMetaDevNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Dev');
            compilerMetaDescriptions.push('// @description:' + language + ' ' + localesMetaJSON.extension.assistant.description);
        }
    });

    compilerMeta = compilerMeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlBuild + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlBuild + 'assistant.meta.js')
        .replace('[ASSISTANT_VERSION]', options.version);

    compilerMetaBeta = compilerMetaBeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaBetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name AdGuard Assistant', '@name AdGuard Assistant Beta')
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlBeta + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlBeta + 'assistant.meta.js')
        .replace('[ASSISTANT_VERSION]', options.version);

    compilerMetaDev = compilerMetaDev
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDevNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name AdGuard Assistant', '@name AdGuard Assistant Dev')
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlDev + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlDev + 'assistant.meta.js')
        .replace('[ASSISTANT_VERSION]', options.version);

    return gulp.src(path.join(options.src, '_compiled'))
        .pipe(file(options.metaBuild, compilerMeta))
        .pipe(file(options.metaBeta, compilerMetaBeta))
        .pipe(file(options.metaDev, compilerMetaDev))
        .pipe(gulp.dest(path.join(options.src, '_compiled')));
};

export default updateMetaLocales;
