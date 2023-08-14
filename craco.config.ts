import path from 'path';
import { CracoConfig } from '@craco/types';
const CracoAlias = require('craco-alias');
const sassResourcesLoader = require('craco-sass-resources-loader');

const config: CracoConfig = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
    eslint: {
        enable: true,
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                debug: false,
                source: 'tsconfig',
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: './src',
                // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
                tsConfigPath: './tsconfig.extend.json',
            },
        },
        {
            plugin: sassResourcesLoader,
            options: {
                resources: './src/library/_variables.scss',
            },
        },
    ],
} as CracoConfig;

export default config;
