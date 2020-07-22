'use strict';

const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    // publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
    ]
  },
  resolve: {
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
