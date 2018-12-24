const path = require('path');
const md5 = require('gulp-hash-creator');
const fs = require('fs');
const request = require('request');
const gutil = require('gulp-util');

const options = global.options || {};

const hashString = stringContent => md5({
    content: stringContent,
});

const prepare = () => {
    let oneskyapp;

    try {
        oneskyapp = JSON.parse(fs.readFileSync(path.join('config', '.keys.json')).toString());
    } catch (err) {
        throw new gutil.PluginError({
            plugin: 'compile',
            message: gutil.colors.red('Make sure you have uploaded file with keys `.keys.json` in /config directory'),
        });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    const formData = {
        file: fs.createReadStream(path.resolve(options.localesDir, options.sourceFileMeta)),
        file_format: 'HIERARCHICAL_JSON',
        locale: 'en',
        is_keeping_all_strings: 'false',
        api_key: oneskyapp.api_key,
        dev_hash: hashString(timestamp + oneskyapp.secret_key),
        timestamp,
    };

    const url = `${oneskyapp.url}${oneskyapp.project_id}/files`;

    return { formData, url };
};

function uploadBaseMetaLocale() {
    const data = prepare();
    return request.post({
        url: data.url,
        formData: data.formData,
    }, (err, httpResponse, body) => {
        if (err) {
            throw new gutil.PluginError({
                plugin: 'compile',
                message: gutil.colors.red(err),
            });
        } else {
            gutil.log(`Upload successful! Server responded with: ${body}`);
        }
    });
}

module.exports = uploadBaseMetaLocale;
