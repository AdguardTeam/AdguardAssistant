const path = require('path');
const webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

const {
    DIST_DIR,
    FILENAME,
    BUILD_DIR,
    SOURCE_DIR,
    CHANNEL_ENVS,
} = require('./constants');

const CHANNEL_ENV = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;

const config = {
    entry: path.resolve(__dirname, SOURCE_DIR, 'index.js'),
    devtool: CHANNEL_ENV === CHANNEL_ENVS.DEV ? 'eval-source-map' : false,
    output: {
        path: path.resolve(__dirname, BUILD_DIR, CHANNEL_ENV),
        filename: FILENAME,
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /src\/gm\.js/,
            'gm-empty.js',
        ),
        new webpack.DefinePlugin({
            DEBUG: CHANNEL_ENV === CHANNEL_ENVS.DEV,
        }),
    ],
};

const fileManagerPlugin = new FileManagerPlugin({
    onEnd: {
        copy: [
            {
                force: true,
                source: path.resolve(__dirname, BUILD_DIR, CHANNEL_ENVS.RELEASE, FILENAME),
                destination: path.resolve(__dirname, DIST_DIR),
            }],
    },
});

if (CHANNEL_ENV === CHANNEL_ENVS.RELEASE) {
    config.plugins.unshift(fileManagerPlugin);
}

module.exports = merge(commonConfig, config);
