const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // 入口
  // entry: '/index.js',
  entry: ['/index.js', '/test.js'],
  // entry: {
  //   index: {
  //     import: '/index.js', // 需要打包的文件路径
  //     // dependOn: [], // 打包所需的依赖
  //     filename: 'index.js', // 打包出来的文件名字
  //   },
  //   test: {
  //     import: '/test.js', // 需要打包的文件路径
  //     filename: 'test.js', // 打包出来的文件名字
  //   },
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'https://a.b.c/assets/',
    filename: 'index.js',
    chunkFilename: 'app_[id].js',
  },
  // 出口 output 属性，这里不设置，则为默认
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // use: ['style-loader', 'css-loader'],
        // loader: 'css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
}
