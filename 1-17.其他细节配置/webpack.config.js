var path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "scripts/[name].js",
    library: "abc"
  },
  context : path.resolve(__dirname, "src")
}