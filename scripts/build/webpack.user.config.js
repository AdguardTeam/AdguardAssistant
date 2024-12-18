import { resolve } from 'node:path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CreateFileWebpack from 'create-file-webpack';
import { DefinePlugin } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config';

import MetaDataPlugin from './metadata.plugin';
import metaSettings from './meta.settings';
import {
    SOURCE_DIR, BUILD_DIR, CHANNEL_ENVS, USERSCRIPT_NAME, LOCALES_DIR, METADATA_TEMPLATE,
} from './constants';
import pkg from '../../package.json';

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
    plugins: [
        new CleanWebpackPlugin(),
        new CreateFileWebpack({
            path: OUTPUT_PATH,
            fileName: 'build.txt',
            content: `version=${pkg.version}`,
        }),
        new DefinePlugin({
            DEBUG: CHANNEL === CHANNEL_ENVS.DEV,
        }),
        new MetaDataPlugin({
            filename: USERSCRIPT_NAME,
            localesDir: LOCALES_DIR,
            metadataTemplate: METADATA_TEMPLATE,
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
