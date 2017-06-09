/**
 * Downloading localizations to project.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const download = require('gulp-download-stream');
const md5 = require('gulp-hash-creator');
const config = require('../config/.keys.json');

function hashString(stringContent) {
    return md5({
        content: stringContent
    });
}

module.exports = () => {
    let options = global.options || {};

    options = Object.assign(options, config);

    let urls = [];

    options.locales.forEach((localization) => {
        let timestamp = Math.round(new Date().getTime() / 1000);

        let url = options.url + options.project_id;
        url += '/translations?locale=' + localization;
        url += '&source_file_name=' + options.sourceFile;
        url += '&export_file_name=' + localization + '.json';
        url += '&api_key=' + options.api_key;
        url += '&timestamp=' + timestamp;
        url += '&dev_hash=' + hashString(timestamp + options.secret_key);

        urls.push({
            file: localization + '.json',
            url: url
        });
    });

    options.metaLocales.forEach((localization) => {
        let timestamp = Math.round(new Date().getTime() / 1000);

        let urlMeta = options.url + options.project_id;
        urlMeta += '/translations?locale=' + localization;
        urlMeta += '&source_file_name=' + options.sourceFileMeta;
        urlMeta += '&export_file_name=' + localization + '.meta.json';
        urlMeta += '&api_key=' + options.api_key;
        urlMeta += '&timestamp=' + timestamp;
        urlMeta += '&dev_hash=' + hashString(timestamp + options.secret_key);

        urls.push({
            file: localization + '.meta.json',
            url: urlMeta
        });
    });

    return download(urls)
        .pipe(gulp.dest(options.directoryName));
};
