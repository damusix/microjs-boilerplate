'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rules = require('./webpack-module-rules');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../public'
  },
  plugins: [
    new CleanWebpackPlugin(['../public']),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: './src/index.html',
      favicon: '',
      minify: true,
      hash: true
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'public'),
    publicPath: '/'
  },
  module: { rules }
};
