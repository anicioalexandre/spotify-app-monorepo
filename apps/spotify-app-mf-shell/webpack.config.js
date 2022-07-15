const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const dependencies = require('./package.json').dependencies

module.exports = (env) => {
  const searchURL = env.production
    ? 'https://mf-app-search.netlify.app'
    : 'http://localhost:3011'
  const albumURL = env.production
    ? 'https://mf-app-album.netlify.app'
    : 'http://localhost:3012'

  return {
    entry: './src/index',
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3010,
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
    optimization: {
      chunkIds: 'named',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new Dotenv(),
      new ModuleFederationPlugin({
        name: 'Shell',
        remotes: {
          Search: `Search@${searchURL}/remoteEntry.js`,
          Album: `Album@${albumURL}/remoteEntry.js`,
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
          // redux: {
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
}
