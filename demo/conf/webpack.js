import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
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
                loader: 'rebem-layers',
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
                    consumers: [
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
                    cacheDirectory: true
                }
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
            template: 'demo/assets/index.html'
        })
    ]
};
