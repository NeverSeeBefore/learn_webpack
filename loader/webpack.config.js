const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "target"),
    // filename: "[name].[chunkhash:5].js"
    filename: "main.d9b3a.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "./src/test-loader"
      },
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: "./src/img-loader"
      }
    ]
  }
}