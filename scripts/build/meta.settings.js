import pkg from '../../package.json';

const { version } = pkg;

const common = {
    fields: {
        USERSCRIPT_VERSION: version,
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
};

const dev = {
    postfix: '(Dev)',
    fields: {
        DOWNLOAD_URL: 'https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js',
        UPDATE_URL: 'https://AdguardTeam.github.io/AdguardAssistant/assistant.meta.js',
    },
};

const beta = {
    postfix: '(Beta)',
    fields: {
        DOWNLOAD_URL: 'https://userscripts.adtidy.org/beta/assistant/4.3/assistant.user.js',
        UPDATE_URL: 'https://userscripts.adtidy.org/beta/assistant/4.3/assistant.meta.js',
    },
};

const release = {
    fields: {
        DOWNLOAD_URL: 'https://userscripts.adtidy.org/release/assistant/4.3/assistant.user.js',
        UPDATE_URL: 'https://userscripts.adtidy.org/release/assistant/4.3/assistant.meta.js',
    },
};

export default {
    common,
    dev,
    beta,
    release,
};
