module.exports = class FileListPlugin {
  constructor(filename = "FileList.txt"){
    this.filename = filename
  }
  apply(compiler) {
    compiler.hooks.emit.tap("FileListPlugin", complation => {
      // console.log(complation.assets);
      var fileList = [];
      for (const key in complation.assets) {
        const content = `[${key}]\n大小： ${complation.assets[key].size() / 1000} KB`;
          fileList.push(content);
        }
    var str = fileList.join("\n\n");
        complation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        }
      }
    })
  }
}