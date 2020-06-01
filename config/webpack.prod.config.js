const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const manifestJSON = require('../dll/modules-manifest.json');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        mode: 'production',
        output: {
            filename: 'js/app.bundle.js',
            publicPath: '/'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all"
                    }
                }
            },
            minimize: true,
            minimizer: [
                new TerserPlugin()
            ],
        },
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, 'public'),
                '@src': path.resolve(__dirname, 'src'),
                '@styles': path.resolve(__dirname, 'src/styles')
            },
        },
        plugins: [
            new BundleAnalyzerPlugin({ 
            analyzerMode: env.ANALYZER, // server | static | disabled
            analyzerPort: 7777
            }),
            new HtmlWebpackPlugin({
                title: 'React Template',
                template: 'public/index.html',
                path: 'public',
                minify: true
            }),
            new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            new WebpackPwaManifestPlugin({
                name: 'Golden-pwa',
                shortname: '',
                description: '',
                background_color: '#fff',
                theme_color: '#b1a',
                icons: [
                    {
                        src: 'https://i.ibb.co/0fJBJ3g/icon-min.png',
                        sizes: [96, 128, 192, 256, 384, 512]
                    }
                ]
            }),
            new WorkboxWebpackPlugin.GenerateSW({
                swDest: 'service-worker.js',
                skipWaiting: true,
                clientsClaim: true
            }),
            new CompressionPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|scss|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new BrotliPlugin({
                asset: '[path].br[query]',
                test: /\.(js|scss|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.optimize.AggressiveMergingPlugin({
                minSizeReduce: 1.5
            }),
            new webpack.DllReferencePlugin({
                context: path.resolve(__dirname, '../dll/'),
                manifest: manifestJSON
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.(scss|sass)$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                        }
                    }
                },
            ]
        }
    };
};