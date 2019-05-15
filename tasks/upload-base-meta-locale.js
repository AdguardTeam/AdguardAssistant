const path = require('path');
const md5 = require('gulp-hash-creator');
const fs = require('fs');
const request = require('request');
const gutil = require('gulp-util');

const hashString = stringContent => md5({
    content: stringContent,
});

const prepare = () => {
    let oneskyapp;

    const options = global.options || {};

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
        api_key: oneskyapp.apiKey,
        dev_hash: hashString(timestamp + oneskyapp.secretKey),
        timestamp,
    };

    const url = `${oneskyapp.url}${oneskyapp.projectId}/files`;

    return { formData, url };
};

const uploadBaseMetaLocale = () => {
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
};

export default uploadBaseMetaLocale;
