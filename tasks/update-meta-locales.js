/**
 * Update meta locales.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');
const endOfLine = require('os').EOL;

module.exports = () => {
    const options = global.options || {};

    let compilerMeta = fs.readFileSync('compiler.meta.template.js').toString();
    let compilerMetaMobile = fs.readFileSync('compiler.meta.template.js').toString();
    let compilerMetaBeta = compilerMeta;
    let compilerMetaDev = compilerMeta;
    let compilerMetaNames = [];
    let compilerMetaBetaNames = [];
    let compilerMetaDevNames = [];
    let compilerMetaDescriptions = [];

    options.metaLocales.forEach((language) => {
        if(language === 'en') return false;

        let localesMetaJSON = fs.readFileSync(path.join(options.localesDir, language + '.meta.json')).toString();

        if(localesMetaJSON.length) {
            localesMetaJSON = JSON.parse(localesMetaJSON);

            compilerMetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name);
            compilerMetaBetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Beta');
            compilerMetaDevNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Dev');
            compilerMetaDescriptions.push('// @description:' + language + ' ' + localesMetaJSON.extension.assistant.description);
        }
    });

    compilerMetaMobile = compilerMetaMobile
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name Adguard Assistant', '@name Adguard Assistant Mobile')
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlBuild + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlBuild + 'assistant.meta.js');

    compilerMeta = compilerMeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlBuild + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlBuild + 'assistant.meta.js');

    compilerMetaBeta = compilerMetaBeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaBetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name Adguard Assistant', '@name Adguard Assistant Beta')
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlBeta + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlBeta + 'assistant.meta.js');

    compilerMetaDev = compilerMetaDev
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDevNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name Adguard Assistant', '@name Adguard Assistant Dev')
        .replace('[DOWNLOAD_URL]', options.downloadUpdateUrlDev + 'assistant.user.js')
        .replace('[UPDATE_URL]', options.downloadUpdateUrlDev + 'assistant.meta.js');

    let metaBuildPath = path.join(options.localesDir, options.metaBuild);
    let metaBetaPath = path.join(options.localesDir, options.metaBeta);
    let metaDevPath = path.join(options.localesDir, options.metaDev);
    let metaDevPathMobile = path.join(options.localesDir, options.metaDevMobile);

    return gulp.src(options.localesDir)
        .pipe(file(metaBuildPath, compilerMeta))
        .pipe(file(metaBetaPath, compilerMetaBeta))
        .pipe(file(metaDevPath, compilerMetaDev))
        .pipe(file(metaDevPathMobile, compilerMetaMobile))
        .pipe(gulp.dest(process.cwd()));
};
