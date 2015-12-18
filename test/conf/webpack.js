import path from 'path';

export default {
    cache: true,
    resolve: {
        alias: {
            test: path.resolve('test/')
        }
    },
    yummies: {
        layers: [
            {
                path: './',
                mode: 'src'
            }
        ]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('src/'),
                    path.resolve('node_modules/')
                ],
                loaders: [
                    '@yummies/inheritance-loader',
                    'babel?cacheDirectory'
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve('src/'),
                loaders: [
                    '@yummies/inheritance-loader',
                    'isparta'
                ]
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
