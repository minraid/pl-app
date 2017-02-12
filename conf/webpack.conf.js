const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const clone = require('js.clone');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appModule = {
  module: {
    loaders: [
      {test: /\.json$/, loaders: ['json-loader']},
      {test: /\.(css|scss)$/, loaders: ['style', 'css', 'sass', 'postcss']},
      {test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader']},
      {test: /\.html$/, loaders: ['html-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: conf.path.src('/client/app/index.html'),
      filename: 'index.html',
      inject: true
    }),
    // production code
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json', '.html']
  },
  target: 'web',
  entry: './src/client/app/main',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp, 'app'),
    filename: 'scripts.js'
  }
};

const adminModule = {
  module: {
    loaders: [
      {test: /\.json$/, loaders: ['json-loader']},
      {test: /\.(css|scss)$/, loaders: ['style', 'css', 'sass', 'postcss']},
      {test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader']},
      {test: /\.html$/, loaders: ['html-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: conf.path.src('/client/admin/index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json', '.html']
  },
  target: 'web',
  entry: './src/client/admin/main',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp, 'admin'),
    filename: 'scripts.js'
  }
};

module.exports = [appModule, adminModule];
