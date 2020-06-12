## 区分环境设置配置

方法一 建立多个配置文件，在打包时手动指定配置
webpack --config webpack.dev.js
方法二 配置文件可以导出一个函数，其中会接到一个参数，这个参数是在运行命令时可以传入
_命令_

- webpack --env abc # env: "abc"
- webpack --env.abc # env: {abc: true}
- webpack --env.abc 1 --env.bcd 2 # env: {abc: 1, bcd: 2}  
  _配置_
  module.exports = function (env) {
  //if(env.abc){} else {}
  return {
  mode: "development"
  }
  }

---

## 其他细节配置

_默认情况下，entry 指定相对目录，其实是相对于当前执行路径_
_指定 context 之后，其他的相对路径均相对于 context 目录_

- context : path.realove(\_\_dirname, "app")

_会将打包结果给 abc_
_abc 将得到入口文件导出的结果_

- output.library : "abc"
  _指定暴露的变量的方式_
- output.libratyTarget: "window" # this, global, window, var
  > 打包代码的表现是这样的 window["abc"] = (fun(moddules){})(modules)

_target_

- target : "web" # node 使用什么模块解析模块。 是 node 还是 web 还有其他环境

_module.rules : []_ loaders
_module.noParse : /reg/_

- module.noParse : /a\.js\$/ // 不对匹配的模块做任何操作，直接当作转换后的代码，用于提高构建性能
  > 原本 wepack 在打包过程中，首先检查模块文件，已加载的不管，
  > 对于未加载的模块，读取文件内容-->抽象语法树分析-->找到它的依赖-->替换依赖函数(继续加载这个模块的依赖)-->保存转换后的代码

_resolve_
控制模块解析过程

- resolve.modules: ["node_modules"] // 模块的查找位置
- resolve.extensions: [".js", ".json"] // 模块的查找位置
- resolve.alias: {"@" : path.reslove(**dirname, "src), \_: **dirname"} // 模块的查找位置

_externals_
externals: {
juqery: "\$",
lodash: "\_"
}

_stats_
控制构建过程中 输出的内容
控制台中的内容 颜色、是否显示打包的模块等信息

##

- 模块化代码中 ./ 代表当亲 js 所在目录
- 在路径处理中 ./ 代表 node 运行目录
- \_\_dirname 当前 js 文件目录

## 插件

html-webpack-plugin
clean-webpack-plugin
copy-wbpack-plugin

## CSS Module

解决类名冲突的方法

- 类名约定 BEM（block-module-modifier)
- css in js (体验不好)
- css module(分模块)
- css 预编译器
  解决样式重复
- css in js
- css 预编译器

- style-loader
  将 css 文件转换并插入 header 中
- css-loader
  将 css 文件类名转换成唯一的，并输出映射表
  -- 全局类名
  :global(.main){
  width: '123'
  }
  -- 局部类名
  :local(.abc)
  .abc

## 预编译器

less sass scss

- install
  npm i -D less
- use
  lessc input output
- rules

```less
// -- 变量
@red: #acd;
// -- 混合mixin
.bordered() {
  border-top: dotted 1px solid;
}
.redcolor {
  color: @red;
  .bordered();
}
// -- 嵌套
// -- 计算
.in-logo {
  height: @height + 30em;
}
// -- 函数
div{
  margin: if((2 > 1), 0, 3px);
  color: if((isColor(@some)), @some, #fff);
}
// -- less 注释   使用 // 不会到编译结果中  /** 这种注释会被加入到编译结果 **/ 
// -- 导入    ！！导入css会原封不动的放在文件中
// 
@import "path.less";
```
