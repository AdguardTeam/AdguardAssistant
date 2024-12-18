/* eslint-disable import/extensions */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import FileManagerPlugin from 'filemanager-webpack-plugin';

import config from './webpack.umd.config.js';
import {
    BUILD_DIR, CHANNEL_ENVS, SELF_FILENAME, DIST_DIR,
} from './constants.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

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
    path: resolve(__dirname, BUILD_DIR, CHANNEL_ENV),
    filename: SELF_FILENAME,
    library: {
        type: 'self',
    },
};

const fileManagerPlugin = new FileManagerPlugin({
    onEnd: {
        copy: [
            {
                source: resolve(__dirname, BUILD_DIR, CHANNEL_ENVS.RELEASE, SELF_FILENAME),
                destination: resolve(__dirname, DIST_DIR),
            },
        ],
    },
});

if (CHANNEL_ENV === CHANNEL_ENVS.RELEASE) {
    config.plugins.unshift(fileManagerPlugin);
}

export default config;
