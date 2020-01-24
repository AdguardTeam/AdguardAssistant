const path = require('path');
const webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const BUILD_DIR = 'build';
const DIST_DIR = 'dist';
const SOURCE_DIR = 'src';
const FILENAME = 'assistant.embedded.js';
const NODE_ENVS = {
    DEV: 'dev',
    BETA: 'beta',
    RELEASE: 'release',
};
const NODE_ENV = NODE_ENVS[process.env.NODE_ENV] || NODE_ENVS.DEV;

const config = {
    mode: NODE_ENV === NODE_ENVS.DEV ? 'development' : 'production',
    entry: path.resolve(__dirname, SOURCE_DIR, 'index-embedded.js'),
    devtool: NODE_ENV === NODE_ENVS.DEV ? 'eval-source-map' : false,
    output: {
        path: path.resolve(__dirname, BUILD_DIR, NODE_ENV),
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
        new webpack.NormalModuleReplacementPlugin(
            /src\/gm\.js/,
            'gm-empty.js',
        ),
        new webpack.DefinePlugin({
            DEBUG: NODE_ENV === NODE_ENVS.DEV,
        }),
    ],
};

const fileManagerPlugin = new FileManagerPlugin({
    onEnd: {
        copy: [
            {
                source: path.resolve(__dirname, BUILD_DIR, NODE_ENVS.RELEASE, FILENAME),
                destination: path.resolve(__dirname, DIST_DIR),
            }],
    },
});

if (NODE_ENV === NODE_ENVS.RELEASE) {
    config.plugins.unshift(fileManagerPlugin);
}

module.exports = config;
