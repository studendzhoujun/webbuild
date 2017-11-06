// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var bannerPlugin = new webpack.BannerPlugin(
//   '// { "framework": "Vue" }\n',
//   { raw: true }
// )
module.exports={
    entry: {
      app:path.resolve('./src/index.js'),
    },
    output: {
      path:path.resolve(__dirname,'dist'),
      filename:'[name].web.js'
    },
    module: {
      // // You can use ESLint now!
      // // Please:
      // // 1. npm install {
      // //   babel-eslint
      // //   eslint
      // //   eslint-config-standard
      // //   eslint-loader
      // //   eslint-plugin-html
      // //   eslint-plugin-promise
      // // } --save-dev
      // // 2. set .eslintrc
      // //   take { "extends": "standard" } for example
      // //   so you need: npm install eslint-plugin-standard --save-dev
      // // 3. set the config below
      // preLoaders: [
      //   {
      //     test: /\.vue$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   }
      // ],
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
      // bannerPlugin
     new HtmlWebpackPlugin({
        template: './src/html/index.html',
     })
    ]
  }


