const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.test.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.test.js',
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'build/release/assistant.user.js',
                to: '.',
            },
            {
                from: 'node_modules/qunit/qunit/qunit.js',
                to: '.',
            },
            {
                from: 'node_modules/qunit/qunit/qunit.css',
                to: '.',
            },
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
    ],
};
