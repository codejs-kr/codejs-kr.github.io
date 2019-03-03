// 파일 생성 관련
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 코드 압축 관련
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { rootPath, srcPath, distPath } = require('./path');

module.exports = {
  mode: 'production',

  // 일반 사용자를 위해 소스 맵 파일에 대한 액세스를 허용하지 않도록 서버를 구성해야합니다!
  // 원본 맵 파일을 웹 서버에 배포하면 안됩니다. 대신 오류보고 도구로만 사용하십시오.
  devtool: 'none', // hidden-source-map

  // 소스
  entry: [
    "@babel/polyfill",
    srcPath
  ],

  // 번들 결과 정보
  output: {
    path: rootPath,
    filename: '[name].[hash].js'
  },

  // 상대 경로 보완
  resolve: {
    alias: {
      components: srcPath + '/components',
      containers: srcPath + '/containers',
      pages: srcPath + '/pages',
      lib: srcPath + '/lib',
      statics: srcPath + '/statics'
    }
  },

  // 모듈 로더
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "useBuiltIns": "usage"
                  },
                ],
                '@babel/preset-react'
              ],
              plugins: [
                "@babel/plugin-syntax-object-rest-spread",      // ES2018
                "@babel/plugin-transform-async-to-generator",   // ES2017
                ["@babel/plugin-proposal-class-properties", { "loose": true }]      // 실험적
              ]
            }
          }
        ]
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
              outputPath: 'dist/img/',
              name: '[name].[hash].[ext]' // 이 속성을 줘야 SCSS에서의 ~statics/* 이미지들도 빌드시 생성 된다 .
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: rootPath
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    // new ImageminPlugin()
  ]
};