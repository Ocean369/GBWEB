const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    optimization: {
        innerGraph: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 100000
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './[name][contenthash].js',
        assetModuleFilename: '[path][name][ext]',
        clean: true

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Gallery",
            template: path.resolve(__dirname, './src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                sideEffects: true
            },
            {
                test: /\.(mp3|mp4)$/i,
                type: 'asset/resource',
                sideEffects: true
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: ImageMinimizerPlugin.loader,
                        options: {
                            minimizer: {
                                implementation: ImageMinimizerPlugin.imageminMinify,
                                options: {
                                    plugins: [
                                        "imagemin-gifsicle",
                                        "imagemin-mozjpeg"
                                    ],
                                },
                            },
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        static: './dist',
        open: true,
        port: 9000

    }
}