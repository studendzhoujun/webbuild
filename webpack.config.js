/*
 * @Author: zhouJun 
 * @Date: 2017-12-07 13:55:21 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-12-08 13:39:23
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileListPlugin = require('./filelist.js')
const bannerPlugin = new webpack.BannerPlugin({
  banner:'// {"hello":"123"}\n',
  raw:true
})
module.exports={
    entry: {
      app:path.resolve('./src/index.js'),
    },
    devtool:'inline-source-map',
    devServer:{
      contentBase:'./dist'
    },
    output: {
      path:path.resolve(__dirname,'dist'),
      filename:'[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: ['vue-loader']
        },{
          test: /\.less$/,
          loaders: ['less-loader']
        },{
          test:/\.(png|jpg)$/,
          loaders:'url-loader?limit=8192&name=[path]/[name].[ext]'
        }
      ]
    },
    plugins: [
     bannerPlugin,
     new HtmlWebpackPlugin({
        template: './src/html/index.html',
     }),
     new FileListPlugin()
    ]
  }


