const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcPath, distPath } = require('./path');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  // 소스
  entry: ['@babel/polyfill', srcPath],

  // 번들 결과
  output: {
    filename: '[name].[hash].js',
  },

  // 상대 경로 보완
  resolve: {
    alias: {
      components: srcPath + '/components',
      containers: srcPath + '/containers',
      pages: srcPath + '/pages',
      helpers: srcPath + '/helpers',
      statics: srcPath + '/statics',
    },
  },

  devServer: {
    hot: true,
    inline: true,
    port: 3007,
    contentBase: [distPath],
  },

  // 모듈 로더
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    modules: false, // react hot loader 사용시 modules false 필수
                    debug: true,
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-object-rest-spread', // ES2018
                '@babel/plugin-transform-async-to-generator', // ES2017
                ['@babel/plugin-proposal-class-properties', { loose: true }], // 실험적
                'react-hot-loader/babel', // react-hot-loader은 수정시 state 유지 시켜준다.
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  // 캐싱
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      showErrors: true,
    }),
    new webpack.ProgressPlugin(),
  ],
};
