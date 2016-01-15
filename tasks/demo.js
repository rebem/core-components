export function demo() {
    process.env.NODE_ENV = 'development';

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
            './demo/'
        ],
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
                            },
                            {
                                path: path.resolve('demo/components/'),
                                files: {
                                    main: 'index.js'
                                }
                            }
                        ],
                        include: [
                            path.resolve('demo/index')
                        ]
                    }
                },
                {
                    test: /\.js$/,
                    exclude: [
                        path.resolve('node_modules/')
                    ],
                    loader: 'babel',
                    query: {
                        cacheDirectory: false
                    }
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
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }),
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
