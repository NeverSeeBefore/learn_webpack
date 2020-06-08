var loader = function (source) {
  console.log(source);
  console.log("文件字节数", source.byteLength)
  // 转为base64格式

  return ""
}

loader.raw = true;  // 表示 这个loader 接受二进制格式 buffer，而不是字符串

module.exports = loader;