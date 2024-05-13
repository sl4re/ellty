"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const buildPath = path.resolve(__dirname, 'build');

const htmlPageNames = ['contact', 'design', 'plans', 'policy'];
const multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./source/${name}.html`,
    filename: `${name}.html`,
    inject: true,
    chunks: [`${name}`]
  })
});
const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: buildPath
    },
    port: 3000,
    open: true,
    compress: true
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  entry: './source/js/script.js',

  output: {
    filename: 'script.js',
    path: buildPath,
    clean: true,
    assetModuleFilename: 'img/[name][ext]'
  },

  plugins: [
    new webpack.ProgressPlugin(handler),
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      favicon: "./source/favicon.ico",
      inject: true,
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'source/img/'),
        to: path.resolve(__dirname, 'build/img/')
      }]
    })
  ].concat(multipleHtmlPlugins),

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        test: /\.js$/i,
      }),
      new HtmlMinimizerPlugin(),
    ]
  },

  module: {
    rules: [
      {
        test: /\.(png|webp|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        generator : {
          filename : 'font/[name][ext]',
        }
      },
      {
        test: /\.(s?css)$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ],
  },
};
