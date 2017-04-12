'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main: path.join(__dirname, 'assets/js/main.js')
    },
    output: {
        filename: 'public/js/bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('public/css/style.css')
    ],
    devtool: 'cheap-source-map',
    module: {
        rules: [{
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015-native-modules', 'stage-3'],
                plugins: ['transform-object-rest-spread']
            },
        }, {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract({loader: 'css-loader!sass-loader'})
        }, {
            test: /\.(woff(2)?|ttf|eot)$/,
            loader: 'url-loader?name=public/fonts/[name].[ext]'
        }, {
            test: /\.svg/,
            loader: 'raw-loader'
        }]
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'assets/js/config.js'),
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};

module.exports = config;
