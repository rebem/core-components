import path from 'path';

export default {
    cache: true,
    resolve: {
        alias: {
            test: path.resolve('test/')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: '@yummies/layers-loader',
                query: {
                    layers: [
                        {
                            path: path.resolve('src/'),
                            files: {
                                main: 'index.js'
                            }
                        }
                    ],
                    include: [
                        path.resolve('test/src/')
                    ]
                }
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve('src/')
                ],
                loader: 'isparta'
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
        ]
    }
};
