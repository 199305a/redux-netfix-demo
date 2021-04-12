/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 14:38:22
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React,webpack5 and Babel7',
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
}
