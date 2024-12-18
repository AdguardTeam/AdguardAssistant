import { resolve } from 'node:path';
import { BannerPlugin, NormalModuleReplacementPlugin, DefinePlugin } from 'webpack';
import FileManagerPlugin from 'filemanager-webpack-plugin';
import { merge } from 'webpack-merge';
import CopyPlugin from 'copy-webpack-plugin';

import commonConfig from './webpack.common.config';

import {
    version, homepage, author, license,
} from '../../package.json';

import {
    DIST_DIR, FILENAME, BUILD_DIR, SOURCE_DIR, CHANNEL_ENVS, TYPES_DIR,
} from './constants';

const CHANNEL_ENV = CHANNEL_ENVS[process.env.CHANNEL_ENV] || CHANNEL_ENVS.DEV;

const banner = `AdGuard Assistant - v${version} - ${new Date().toDateString()}
${homepage ? `${homepage}` : ''}
Copyright (c) ${new Date().getFullYear()} ${author}. Licensed ${license}`;

const config = {
    entry: resolve(__dirname, SOURCE_DIR, 'index.js'),
    devtool: CHANNEL_ENV === CHANNEL_ENVS.DEV ? 'eval-source-map' : false,
    output: {
        path: resolve(__dirname, BUILD_DIR, CHANNEL_ENV),
        filename: FILENAME,
        library: {
            type: 'umd',
        },
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new BannerPlugin(banner),
        new NormalModuleReplacementPlugin(
            /src\/gm\.js/,
            'gm-empty.js',
        ),
        new DefinePlugin({
            DEBUG: CHANNEL_ENV === CHANNEL_ENVS.DEV,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: resolve(__dirname, TYPES_DIR),
                    to: resolve(__dirname, DIST_DIR),
                },
            ],
        }),
    ],
};

const fileManagerPlugin = new FileManagerPlugin({
    onEnd: {
        copy: [
            {
                source: resolve(__dirname, BUILD_DIR, CHANNEL_ENVS.RELEASE, FILENAME),
                destination: resolve(__dirname, DIST_DIR),
            },
        ],
    },
});

if (CHANNEL_ENV === CHANNEL_ENVS.RELEASE) {
    config.plugins.unshift(fileManagerPlugin);
}

export default merge(commonConfig, config);
