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

    gutil.log('Appending locales...');

    return options.locales.forEach((language) => {
        let localesJSON = fs.readFileSync(path.join(options.directoryName, language + '.json')).toString();
        let string = 'var ' + language + ' = ' + localesJSON;
        let filename = language + '.js';

        file(filename, string)
            .pipe(gulp.dest(options.src + '/_locales'));
    });
};
