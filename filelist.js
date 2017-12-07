function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // 创建一个头部字符串：
    var filelist = 'In this build:\n\n';

    // 检查所有编译好的资源文件：
    // 为每个文件名新增一行
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
      console.log(filename)
    }
    // 把它作为一个新的文件资源插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;