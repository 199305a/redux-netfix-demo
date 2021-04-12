/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 19:01:57
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: './'
  },
  target: 'web',
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",         // babel-loader 使用起来
          // options: {
          //   presets: [                  // 让他帮我把es6+的代码转es5
          //     "@babel/preset-env"
          //   ],
          // }
        }],
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
  devServer: {
    hot: true
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
