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
                exclude: [
                    path.resolve('src/'),
                    path.resolve('node_modules/')
                ],
                loaders: [
                    '@yummies/inheritance-loader?layers[]=src/',
                    'babel?cacheDirectory'
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve('src/'),
                loaders: [
                    '@yummies/inheritance-loader?layers[]=src/',
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
