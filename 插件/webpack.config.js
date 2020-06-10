const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWbepackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    main: "./src/index.js",  // 入口模块
  },
  output: {
    path: path.resolve(__dirname, "dist"),  // 输出的绝对路径
    filename: "scripts/[name].[chunkhash:5].js"  // 合并js文件的规则  name hash:n chunkhash:n id
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.template.html"
    }),
    new CopyWbepackPlugin({
      patterns: [
        {from: 'src', to: "src"}
      ]
    })
  ]
  // devtool: "source-map"
};