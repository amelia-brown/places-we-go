const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    fileName: 'bundle.js',
  },
  devTool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
      },
      {
        test: /\.css$/,
        loader: 'css!style!sass',
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
    new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              screw_ie8: true,
            },
            output: {
              comments: false,
            },
            sourcemap: false,
          }),
  ],
}
