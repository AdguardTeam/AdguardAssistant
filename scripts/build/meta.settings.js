const pkg = require('../../package.json');

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
        postfix: '(Dev)',
        fields: {
            DOWNLOAD_URL: 'https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js',
            UPDATE_URL: 'https://AdguardTeam.github.io/AdguardAssistant/assistant.meta.js',
        },
    },
    beta: {
        postfix: '(Beta)',
        fields: {
            DOWNLOAD_URL: 'https://userscripts.adtidy.org/beta/assistant/4.3/assistant.user.js',
            UPDATE_URL: 'https://userscripts.adtidy.org/beta/assistant/4.3/assistant.meta.js',
        },
    },
    release: {
        fields: {
            DOWNLOAD_URL: 'https://userscripts.adtidy.org/release/assistant/4.3/assistant.user.js',
            UPDATE_URL: 'https://userscripts.adtidy.org/release/assistant/4.3/assistant.meta.js',
        },
    },
};

module.exports = releaseChannels;
