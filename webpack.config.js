const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
      },
      {
        test: /\.(css|sass)$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: 'node_modules',
      },
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css',
      '.sass',
      '.png',
      '.jpg',
    ],
    moduleDirectories: [
      'src',
      'node_modules',
    ],
    root: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // TODO: uglify prod build
  ],
}
