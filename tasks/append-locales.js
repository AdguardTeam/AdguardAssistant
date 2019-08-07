/**
 * Converting downloaded localization from json to js object variable.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const file = require('gulp-file');
const path = require('path');

const appendLocales = (done) => {
    const options = global.options || {};

    gutil.log('Appending downloadLocales...');

    options.locales.forEach((language) => {
        let localePath = path.join(options.localesDir, language,  'messages.json');
        let localesJSON = fs.readFileSync(localePath).toString();
        let string = 'var ' + language.replace('-','_') + ' = ' + localesJSON;
        let filename = language + '.js';

        file(filename, string)
            .pipe(gulp.dest(options.src + '/_locales'));
    });
    done();
};

export default appendLocales;
