const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MetaDataPlugin = require('./metadata.plugin');
const metaSettings = require('./meta.settings');


const BUILD_DIR = 'build';
const SOURCE_DIR = 'src';
const MODE_TYPES = { DEV: 'dev', BETA: 'beta', RELEASE: 'release' };
const MODE = MODE_TYPES[process.env.NODE_ENV] || MODE_TYPES.DEV;
const USERSCRIPT_NAME = 'assistant';

const config = {
    mode: MODE === MODE_TYPES.DEV ? 'development' : 'production',
    entry: {
        main: path.resolve(__dirname, SOURCE_DIR, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, BUILD_DIR, MODE),
        filename: `${USERSCRIPT_NAME}.user.js`,
    },
    optimization: {
        minimize: MODE === MODE_TYPES.RELEASE || MODE === MODE_TYPES.BETA,
    },
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
                loader: 'raw-loader',
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
        new MetaDataPlugin({
            filename: USERSCRIPT_NAME,
            ...metaSettings.common,
            ...(metaSettings[MODE] || {}),
            fields: {
                ...metaSettings.common.fields,
                ...((metaSettings[MODE] && metaSettings[MODE].fields) || {}),
            },
        }),
    ],
};

module.exports = config;
