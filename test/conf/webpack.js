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
                    path.resolve('components/'),
                    path.resolve('node_modules/')
                ],
                loaders: [
                    '@yummies/inheritance-loader?layers[]=components/',
                    'babel?cacheDirectory'
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve('components/'),
                loaders: [
                    '@yummies/inheritance-loader?layers[]=components/',
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
