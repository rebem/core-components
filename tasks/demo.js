export function demo() {
    const path = require('path');
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const config = {
        cache: true,
        stats: {
            colors: true,
            reasons: false
        },
        output: {
            pathinfo: true,
            path: path.resolve('./'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        entry: [
            'webpack/hot/dev-server',
            './demo/index'
        ],
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    include: [
                        path.resolve('demo/'),
                        path.resolve('components/')
                    ],
                    loaders: [
                        '@yummies/inheritance-loader',
                        'babel?cacheDirectory'
                    ]
                }
            ],
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: 'demo/assets/index.html',
                assets: {
                    bundle: 'bundle.js'
                }
            })
        ]
    };

    process.env.NODE_ENV = 'development';

    return new Promise((resolve, reject) => {
        const server = new WebpackDevServer(webpack(config), {
            hot: true,
            stats: {
                colors: true,
                children: false,
                assets: false,
                version: false,
                hash: false,
                chunkModules: false
            }
        });

        server.listen('3000', err => {
            if (err) {
                return reject(err);
            }

            resolve('http://localhost:3000/webpack-dev-server/');
        });
    });
}
