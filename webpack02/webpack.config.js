/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 声明模块处理规则
  module: {
    // 定义什么模块用什么 loader 处理器
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-typescript'] },
        },
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
        ], // 注意：style-loader 要在 css-loader 之前，语义上是：style-loader(css-loader(css))
      },
    ],
  },
  resolve: {
    // extensions 声明能自动解析传入的类型的后缀文件，这意味着如 import './a.ts' 可以省略后缀声明
    extensions: ['.ts', '.js'],
  },
  // 添加插件
  plugins: [
    // new ESlintPlugin({ extensions: ['.js', '.ts'] }),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin(),
  ],
}
