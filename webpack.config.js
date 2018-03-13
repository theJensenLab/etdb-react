var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  mode: "development",
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {publicPath: "/"}  
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: __dirname,
    publicPath: "/",
    port: 9156,
    host: "127.0.0.1"
  }
};