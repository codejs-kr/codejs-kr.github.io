const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getAbsPath, rootPath, srcPath, publicPath, distPath } = require('./path');

module.exports = {
  mode: 'development',

  // 소스
  entry: {
    app: srcPath
  },

  // 번들 결과
  output: {
    filename: '[name].[hash].js'
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

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    inline: true,
    port: 3007,
    contentBase: [
      distPath
    ],
  },

  // 모듈 로더
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
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
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

  // 캐싱
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      showErrors: true
    })
  ]
};