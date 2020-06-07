var devConfig = require("./webpack.dev");
var prodConfig = require("./webpack.prod");
var baseConfig = require("./webpack.base");
module.exports = function (env) {
  if(env && env.prod){
    return {
      ...baseConfig,
      ...prodConfig
    }
  }else{
    return {
      ...baseConfig,
      ...devConfig
    }
  }
}