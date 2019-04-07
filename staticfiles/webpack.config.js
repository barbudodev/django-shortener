const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = true;

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        toggle_menu: './src/js/main.js',
        calls_apis: './src/js/api_calls.js',
        styles: './src/js/styles.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: devMode ? '[name].js' : '[name].[hash].js',
        filename: devMode ? '[name].js' : '[name].[hash].js',
        filename: devMode ? '[name].js' : '[name].[hash].js',
    },
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
}