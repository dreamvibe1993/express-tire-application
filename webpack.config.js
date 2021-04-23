const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: path.resolve(__dirname, "build"),
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    entry: "./src/index.js",
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            },

        ]
    },
};