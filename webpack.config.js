const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          interpolate: true,
          minimize: true,
        },
      }],
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
        'img-loader',
      ],
    }],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};