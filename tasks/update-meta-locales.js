/**
 * Converting donwloaded localization from json to.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');

module.exports = () => {
    const options = global.options || {};

    let compilerMeta = fs.readFileSync('compiler.meta.template.js').toString();
    let compilerMetaBeta = compilerMeta;
    let compilerMetaNamesString = '';
    let compilerMetaBetaNamesString = '';
    let compilerMetaDescriptionsString = '';

    options.metaLocales.forEach((language) => {
        if(language === 'en') return false;

        let localesMetaJSON = fs.readFileSync(path.join(options.directoryName, language + '.meta.json')).toString();

        if(localesMetaJSON.length) {
            localesMetaJSON = JSON.parse(localesMetaJSON);

            compilerMetaNamesString += '// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + '\n';
            compilerMetaDescriptionsString += '// @description:' + language + ' ' + localesMetaJSON.extension.assistant.description + '\n';
            compilerMetaBetaNamesString += '// @name:' + language + ' ' + localesMetaJSON.extension.assistant.name + ' Beta \n';
        }
    });

    compilerMeta = compilerMeta
        .replace('// [NAMES IN OTHER LANGUAGES]', compilerMetaNamesString)
        .replace('// [DESCRIPTIONS IN OTHER LANGUAGES]', compilerMetaDescriptionsString);

    compilerMetaBeta = compilerMetaBeta
        .replace('// [NAMES IN OTHER LANGUAGES]', compilerMetaBetaNamesString)
        .replace('// [DESCRIPTIONS IN OTHER LANGUAGES]', compilerMetaDescriptionsString)
        .replace('@name Adguard Assistant', '@name Adguard Assistant Beta')
        .replace(new RegExp('public/Userscripts/AdguardAssistant', 'g'), 'public/Userscripts/Beta/AdguardAssistant');

    return gulp.src('compiler.meta.build.js')
        .pipe(file('compiler.meta.build.js', compilerMeta))
        .pipe(file('compiler.meta.beta.js', compilerMetaBeta))
        .pipe(gulp.dest(process.cwd()));
};
