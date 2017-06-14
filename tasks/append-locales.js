/**
 * Converting donwloaded localization from json to js object variable.
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
        let localePath = path.join(options.localesDir, language + '.json');
        let localesJSON = fs.readFileSync(localePath).toString();
        let string = 'var ' + language + ' = ' + localesJSON;
        let filename = language + '.js';

        file(filename, string)
            .pipe(gulp.dest(options.src + '/_locales'));
    });
};
