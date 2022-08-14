const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const entryies = require('./entry');
const { ProgressPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: entryies,
  output: {
    path: path.resolve(__dirname, './../'),
    filename: (chunkData) => {
      return chunkData.chunk.name === 'index' ? 'lib/[name].js' : 'lib/components/[name]/index.js';
    },
    library: '[name]',
    libraryTarget: 'umd'
  },
  mode: 'production',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src')
    },
    mainFiles: ['index'],
    extensions: ['.ts', '.tsx', '.less', 'json', '.js']
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: false
        }
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jsx|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset?resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name.css]'
    }),
    new ProgressPlugin({
      activeModules: true,
      entries: true,
      modules: false,
      modulesCount: 5000,
      dependencies: false,
      dependenciesCount: 10000,
      // handler(percentage, message, ...args) {
      //   console.log("进度：" + percentage * 100 + '%' + " " + "操作：" + message)
      // }
    })
  ]
}