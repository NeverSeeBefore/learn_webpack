const HtmlWebpackPligin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.postcss$/, use: [ MiniCssExtractPlugin.loader, "postcss-loader" ],
      },
      {
        test: /\.css$/, use: [ MiniCssExtractPlugin.loader , {
          loader: "css-loader",
          options: {
            modules: true
          }
        }],
      },
      {
        test: /\.png$/, use: [{
          loader: "file-loader",
          options: {
            name: "img/[hash:5].[ext]"
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPligin({
      template: './src/index.template.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css'
    }),
    new CleanWebpackPlugin(),
  ]
}