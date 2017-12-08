/*
 * @Author: zhouJun 
 * @Date: 2017-12-08 14:01:48 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-12-08 14:36:54
 */

class FileListPlugin {
      constructor(options){
        // this.options = optons
      }
      apply(compiler){
        compiler.plugin('emit',(compilation,callback)=>{
          let filelist = 'In this building:\n\n'
          for(let filename in compilation.assets){
            filelist += ('- '+filename+'\n')
          }
          compilation.assets['filelist.md']={
            source:()=> filelist,
            size:()=> filelist.length
          }
          callback && callback()
        })
      }
}
module.exports = FileListPlugin;