const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CreateFileWebpack = require('create-file-webpack');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

const MetaDataPlugin = require('./metadata.plugin');
const metaSettings = require('./meta.settings');
const {
    SOURCE_DIR,
    BUILD_DIR,
    CHANNEL_ENVS,
    USERSCRIPT_NAME,
    LOCALES_DIR,
    METADATA_TEMPLATE,
} = require('./constants');
const pkg = require('../../package.json');

const CHANNEL = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;
const OUTPUT_PATH = path.resolve(__dirname, BUILD_DIR, CHANNEL);

const config = {
    entry: {
        [`${USERSCRIPT_NAME}.user`]: path.resolve(__dirname, SOURCE_DIR, 'index.user.js'),
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
        new webpack.DefinePlugin({
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

module.exports = merge(commonConfig, config);
