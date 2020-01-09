const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPl = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src','index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
      rules:[
        {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  publicPath: '../',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              'css-loader',
            ],
          },
          {
              test:/\.m?js$/,
              exclude: /node_modules/,
              use:{
                  loader:'babel-loader',
                  options:{
                    presets:['@babel/preset-env']
                  }
              }
          },
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/env','@babel/react'],
            },
            
        },


      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlPl({
        filename:'index.html',
        template:'src/index.html',
    })
  ],
  devServer:{
    port:9000
  }
};