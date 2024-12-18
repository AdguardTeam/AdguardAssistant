import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
    mode: 'development',
    entry: resolve(__dirname, './index.test.js'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'bundle.test.js',
    },
    devtool: 'inline-source-map',
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
                    attributes: false,
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
                use: {
                    loader: 'babel-loader',
                },
                resolve: {
                    // we use esm and it requires .js extensions in imports,
                    // but we don't want to write them
                    fullySpecified: false,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/qunit/qunit/qunit.js',
                },
                {
                    from: 'node_modules/qunit/qunit/qunit.css',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
    ],
};

export default config;
