const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const config = require('./webpack.umd.config');
const {
    BUILD_DIR,
    CHANNEL_ENVS,
    SELF_FILENAME,
    DIST_DIR,
} = require('./constants');

const CHANNEL_ENV = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;

/**
 * This config is used to build a script that would expose itself as a variable in the self-context.
 * After this script is injected into the page with script tag, it can be used as a regular
 * variable "adguardAssistant".
 * This module is needed because sometimes there is no way to use umd module on some sites.
 * Because they have their own implementation of the define function in the global scope.
 * see AG-22653 issue
 */
config.output = {
    path: path.resolve(__dirname, BUILD_DIR, CHANNEL_ENV),
    filename: SELF_FILENAME,
    library: {
        type: 'self',
    },
};

const fileManagerPlugin = new FileManagerPlugin({
    onEnd: {
        copy: [
            {
                source: path.resolve(__dirname, BUILD_DIR, CHANNEL_ENVS.RELEASE, SELF_FILENAME),
                destination: path.resolve(__dirname, DIST_DIR),
            },
        ],
    },
});

if (CHANNEL_ENV === CHANNEL_ENVS.RELEASE) {
    config.plugins.unshift(fileManagerPlugin);
}

module.exports = config;
