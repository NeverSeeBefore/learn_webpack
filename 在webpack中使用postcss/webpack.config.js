const HtmlWebpackPligin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    open: true
  },
  module: {
    rules: [
      {test: /\.postcss$/,use: [ 'style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, 'postcss-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPligin({
      template: './src/index.template.html'
    })
  ]
}