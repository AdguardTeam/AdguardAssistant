/* eslint-disable import/extensions */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CreateFileWebpack from 'create-file-webpack';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config.js';
import MetaDataPlugin from './metadata.plugin.js';
import metaSettings from './meta.settings.js';
import {
    SOURCE_DIR, BUILD_DIR, CHANNEL_ENVS, USERSCRIPT_NAME, LOCALES_DIR,
} from './constants.js';

const pkg = JSON.parse(fs.readFileSync(new URL('../../package.json', import.meta.url)));

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHANNEL = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;
const OUTPUT_PATH = resolve(__dirname, BUILD_DIR, CHANNEL);

const config = {
    entry: {
        [`${USERSCRIPT_NAME}.user`]: resolve(__dirname, SOURCE_DIR, 'index.user.js'),
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
    },
    optimization: {
        minimize: CHANNEL === CHANNEL_ENVS.RELEASE || CHANNEL === CHANNEL_ENVS.BETA,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
            resolve: {
                // we use esm and it requires .js extensions in imports,
                // but we don't want to write them
                fullySpecified: false,
            },
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CreateFileWebpack({
            path: OUTPUT_PATH,
            fileName: 'build.txt',
            content: `version=${pkg.version}`,
        }),
        new webpack.DefinePlugin({
            DEBUG: CHANNEL === CHANNEL_ENVS.DEV,
        }),
        new MetaDataPlugin({
            filename: USERSCRIPT_NAME,
            localesDir: LOCALES_DIR,
            ...metaSettings.common,
            ...(metaSettings[CHANNEL] || {}),
            fields: {
                ...metaSettings.common.fields,
                ...((metaSettings[CHANNEL] && metaSettings[CHANNEL].fields) || {}),
            },
        }),
    ],
};

export default merge(commonConfig, config);
