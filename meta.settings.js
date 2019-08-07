const pkg = require('./package.json');

const releaseChannels = {
    common: {
        fields: {
            USERSCRIPT_VERSION: pkg.version,
            USERSCRIPT_NAME: {
                messageKey: 'extension.assistant.name',
                metaName: 'name',
                usePostfix: true,
            },
            USERSCRIPT_DESCRIPTION: {
                messageKey: 'extension.assistant.description',
                metaName: 'description',
            },
        },
    },
    dev: {
        postfix: 'Dev',
        fields: {
            DOWNLOAD_URL: 'https://adguard.com/dev',
            UPDATE_URL: 'https://adguard.com/dev',
        },
    },
    beta: {
        postfix: 'Beta',
        fields: {
            DOWNLOAD_URL: 'https://adguard.com/beta',
            UPDATE_URL: 'https://adguard.com/beta',
        },
    },
    release: {
        fields: {
            DOWNLOAD_URL: 'https://adguard.com',
            UPDATE_URL: 'https://adguard.com',
        },
    },
};

module.exports = releaseChannels;
