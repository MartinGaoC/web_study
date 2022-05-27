# 常用API

* process
    - process.argv  获取命令参数数组，前两个参数是路径
    - process.env
    - process.cwd() 当前工作目录
    - process.nextTick
* buffer
* path路径
    - path.join
    - path.resolve
    - path.extname
* fs文件目录
    - 创建文件夹：fs.mkdirSync
    - 删除文件夹: fs.rmdirSync
    - 创建文件: fs.writeFile
    - 删除文件: fs.unlinkSync
    - 修改文件名称: fs.
    - 文件是否存在: fs.exitsSync
    - 文件是否可被访问: fs.access
    - 查看子目录: fs.readdirSync(path)
* 是否是文件夹：
    ```
        let statObj = fs.statSync
        statObj.isDirectory()   //是否是文件夹
        statObj.isFile()        //是否是文件
    ```
    - fs.readFile 同步读文件
    - fs.readFileSync 异步读文件
    - fs.createReadStream 文件可读流
    - fs.createWriteStream 文件可写流
    - pipe 管道

* http模块
    - new server实例
    - 监听请求 给请求返回响应
* child_process
    - 新启动一个进程去运行文件