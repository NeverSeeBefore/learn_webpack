const path = require("path");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    main: "./src/index.js",  // 入口模块 
    a: "./src/a.js",
    c: ["./src/c1.js", "./src/c2.js", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "target"),  // 输出的绝对路径
    filename: "scripts/[id].[name].[chunkhash:5].js"  // 合并js文件的规则  name hash:n chunkhash:n id
  },
  // devtool: "source-map"
};
