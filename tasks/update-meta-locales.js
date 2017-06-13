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
    let compilerMetaBeta = compilerMeta;
    let compilerMetaNames = [];
    let compilerMetaBetaNames = [];
    let compilerMetaDescriptions = [];

    options.metaLocales.forEach((language) => {
        if(language === 'en') return false;

        let localesMetaJSON = fs.readFileSync(path.join(options.localesDir, language + '.meta.json')).toString();

        if(localesMetaJSON.length) {
            localesMetaJSON = JSON.parse(localesMetaJSON);

            compilerMetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name);
            compilerMetaBetaNames.push('// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Beta');
            compilerMetaDescriptions.push('// @description:' + language + ' ' + localesMetaJSON.extension.assistant.description);
        }
    });

    compilerMeta = compilerMeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine));

    compilerMetaBeta = compilerMetaBeta
        .replace('// [NAMES_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaBetaNames.join(endOfLine))
        .replace('// [DESCRIPTIONS_IN_OTHER_LANGUAGES_PLACEHOLDER]', compilerMetaDescriptions.join(endOfLine))
        .replace('@name Adguard Assistant', '@name Adguard Assistant Beta')
        .replace(new RegExp('/Userscripts/AdguardAssistant', 'g'), '/Userscripts/Beta/AdguardAssistant');

    let metaBuildPath = path.join(options.localesDir, options.metaBuild);
    let metaBetaPath = path.join(options.localesDir, options.metaBeta);

    return gulp.src(options.localesDir)
        .pipe(file(metaBuildPath, compilerMeta))
        .pipe(file(metaBetaPath, compilerMetaBeta))
        .pipe(gulp.dest(process.cwd()));
};
