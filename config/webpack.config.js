const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { getAbsPath, rootPath, srcPath, publicPath, distPath } = require('./path');

module.exports = {
  mode: 'development',

  entry: srcPath,

  output: {
    filename: 'main.[hash].js'
  },

  // 상대 경로 보완
  resolve: {
    alias: {
      components: srcPath + '/components',
      containers: srcPath + '/containers',
      pages: srcPath + '/pages',
      statics: srcPath + '/statics'
    }
  },

  devtool: 'source-map',

  devServer: {
    port: 3007,
    hot: true,
    inline: true,
    contentBase: [
      srcPath
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // includePaths: [srcPath + '/statics/scss/modules']  // component SCSS 내부에서 import시 사용하는 path설정.
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // outputPath: 'statics/img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: rootPath
    }),
    new CopyWebpackPlugin([
      {
        from: srcPath + '/statics/img',
        to: distPath + '/statics/img'
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
};