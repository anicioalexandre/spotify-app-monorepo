const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const dependencies = require('./package.json').dependencies

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3011,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'Search',
      filename: 'remoteEntry.js',
      exposes: {
        './Search': './src/App',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        // 'react-router-dom': {
        //   singleton: true,
        // },
        // 'react-redux': {
        //   singleton: true,
        // },
        // 'redux': {
        //   singleton: true,
        // },
        // 'design-system': {
        //   singleton: true,
        // },
        // config: {
        //   singleton: true,
        // },
      },
    }),
  ],
}
