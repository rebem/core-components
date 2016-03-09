import path from 'path';
import webpack from 'webpack';

export default {
    cache: true,
    resolve: {
        alias: {
            test: path.resolve('test/'),
            sinon: 'sinon/pkg/sinon'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'rebem-layers',
                query: {
                    layers: [
                        {
                            path: path.resolve('src/'),
                            files: {
                                main: 'index.js'
                            }
                        }
                    ],
                    consumers: [
                        path.resolve('test/src/')
                    ]
                }
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve('src/')
                ],
                loader: 'babel-istanbul',
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('src/'),
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        noParse: [
            /node_modules\/sinon\//
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};
