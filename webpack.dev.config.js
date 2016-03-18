var webpack = require('webpack')
var path = require('path')
// webpack中生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式提取到单独的css文件里，而不是将样式打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectRoot = path.resolve(__dirname, "src")

module.exports = {
  entry: `${projectRoot}/index.js`,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')],
    extensions: ["", ".web.js", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        include: projectRoot,
        test: /\.jsx$/,
        loader: 'babel'
      }, {
        include: projectRoot,
        test: /\.js$/,
        loader: 'babel'
      }, {
        //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        test: /\.(jpg|png|gif)$/,
        include: projectRoot,
        loader: "url",
        limit: 10240,
        name: "[name].[ext]?[hash]"  // 文件超出大小限制时的文件命名
      }, {
        // 文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  debug: true,
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo with react",
      template: "./src/index.html", // 指定模板生成文件
      inject: 'body', // js插入的位置
      hash: true, // 为静态资源生成hash值
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.HotModuleReplacementPlugin() //热加载
  ],
  // webpack-dev-server配置
  devServer: {
    contentBase: "./build",
    host: "localhost",
    port: 8082,
    inline: true, // 可以监控js变化
    hot: true,
    open: true,
    colors: true
  }
}