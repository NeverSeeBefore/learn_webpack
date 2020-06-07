var FileListPlugin = require("./plugins/FileListPlugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new FileListPlugin("f-list.txt"),
  ]
}