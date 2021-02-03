const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CreateFileWebpack = require('create-file-webpack');
const webpack = require('webpack');

const MetaDataPlugin = require('./metadata.plugin');
const metaSettings = require('./meta.settings');
const pkg = require('./package.json');

const BUILD_DIR = 'build';
const SOURCE_DIR = 'src';
const CHANNEL_ENVS = { DEV: 'dev', BETA: 'beta', RELEASE: 'release' };
const CHANNEL = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;
const USERSCRIPT_NAME = 'assistant';
const OUTPUT_PATH = path.resolve(__dirname, BUILD_DIR, CHANNEL);

const config = {
    mode: CHANNEL === CHANNEL_ENVS.DEV ? 'development' : 'production',
    entry: {
        [`${USERSCRIPT_NAME}.user`]: path.resolve(__dirname, SOURCE_DIR, 'index.js'),
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
    },
    optimization: {
        minimize: CHANNEL === CHANNEL_ENVS.RELEASE || CHANNEL === CHANNEL_ENVS.BETA,
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['to-string-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
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
            ...metaSettings.common,
            ...(metaSettings[CHANNEL] || {}),
            fields: {
                ...metaSettings.common.fields,
                ...((metaSettings[CHANNEL] && metaSettings[CHANNEL].fields) || {}),
            },
        }),
    ],
};

module.exports = config;
