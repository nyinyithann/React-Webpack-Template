const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 8080,
    proxy: {
      '/fetch': {
        target: {
          host: 'localhost',
          protocol: 'http:',
          port: 5000,
        },
        pathRewrite: {
          '^/fetch': '',
        },
      },
    },
  },
  devtool: 'eval-source-map',
};
