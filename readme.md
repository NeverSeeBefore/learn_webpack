## 区分环境设置配置
方法一 建立多个配置文件，在打包时手动指定配置
webpack --config webpack.dev.js
方法二 配置文件可以导出一个函数，其中会接到一个参数，这个参数是在运行命令时可以传入
*命令*  
  - webpack --env abc   # env: "abc"
  - webpack --env.abc   # env: {abc: true}
  - webpack --env.abc 1 --env.bcd 2 # env: {abc: 1, bcd: 2}   
*配置*
  module.exports = function (env) {
    //if(env.abc){} else {}
    return {
      mode: "development"
    }
  }
--------------------
## 其他细节配置

*默认情况下，entry指定相对目录，其实是相对于当前执行路径*
*指定context之后，其他的相对路径均相对于context目录*
- context : path.realove(__dirname, "app")

*会将打包结果给 abc*
*abc 将得到入口文件导出的结果*
- output.library : "abc"
*指定暴露的变量的方式*
- output.libratyTarget: "window" # this, global, window, var
> 打包代码的表现是这样的   window["abc"] = (fun(moddules){})(modules)

*target*
- target : "web" # node 使用什么模块解析模块。 是node还是web 还有其他环境

*module.rules : []* loaders
*module.noParse : /reg/* 
  - module.noParse : /a\.js$/ // 不对匹配的模块做任何操作，直接当作转换后的代码，用于提高构建性能
> 原本wepack在打包过程中，首先检查模块文件，已加载的不管，
> 对于未加载的模块，读取文件内容-->抽象语法树分析-->找到它的依赖-->替换依赖函数(继续加载这个模块的依赖)-->保存转换后的代码

*resolve*
控制模块解析过程  
  - resolve.modules: ["node_modules"] // 模块的查找位置
  - resolve.extensions: [".js", ".json"] // 模块的查找位置
  - resolve.alias: {"@" : path.reslove(__dirname, "src), _: __dirname"} // 模块的查找位置

*externals*
  externals: {
    juqery: "$",
    lodash: "_"
  }

*stats*
控制构建过程中 输出的内容
控制台中的内容 颜色、是否显示打包的模块等信息

