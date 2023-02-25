const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: './[name].[contenthash].js',
        assetModuleFilename: './media/[name][ext]',
        clean: true,
    },
    resolve: {
        modules: ['node_modules']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                sideEffects: true,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
                type: 'asset/resource',
                sideEffects: true
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: "index.html",
            template: path.resolve(__dirname, "./main/index.html"),
            scriptLoading: 'module'
        }),
        new MiniCssExtractPlugin({
            filename: "./[name].[contenthash].css",
        }),
        // Plugin for hot module replacement
        // new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: './dist',
        hot: true,
        static: {
            directory: path.join(__dirname, './'),
        },
    },
};
