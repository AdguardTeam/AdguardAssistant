const path = require('path');
const webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const BUILD_DIR = 'build';
const DIST_DIR = 'dist';
const SOURCE_DIR = 'src';
const FILENAME = 'assistant.embedded.js';
const MODE_TYPES = { DEV: 'dev', BETA: 'beta', RELEASE: 'release' };
const MODE = MODE_TYPES[process.env.NODE_ENV] || MODE_TYPES.DEV;

const config = {
    mode: MODE === MODE_TYPES.DEV ? 'development' : 'production',
    entry: path.resolve(__dirname, SOURCE_DIR, 'index-embedded.js'),
    devtool: MODE === MODE_TYPES.DEV ? 'eval-source-map' : false,
    output: {
        path: path.resolve(__dirname, BUILD_DIR, MODE),
        filename: FILENAME,
        libraryExport: 'default',
    },
    optimization: {
        minimize: false,
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
        MODE === MODE_TYPES.RELEASE && new FileManagerPlugin({
            onEnd: {
                copy: [
                    {
                        source: path.resolve(__dirname, BUILD_DIR, MODE_TYPES.RELEASE, FILENAME),
                        destination: path.resolve(__dirname, DIST_DIR),
                    }],
            },
        }),
        new webpack.NormalModuleReplacementPlugin(
            /src\/gm\.js/,
            'gm-empty.js',
        ),
        new webpack.DefinePlugin({
            DEBUG: MODE === MODE_TYPES.DEV,
        }),
    ].filter(Boolean),
};

module.exports = config;
