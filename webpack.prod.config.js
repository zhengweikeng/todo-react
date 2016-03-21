var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("bundle.[contenthash].css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 指定模板生成文件
      inject: 'body', // js插入的位置
      hash: true, // 为静态资源生成hash值
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})