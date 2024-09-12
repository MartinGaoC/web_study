# webpack 五大模块
- 入口
- 输出
- mode
- loader模块
- plugins

# webpack的工作流程

webpack是一个串行的工作流程

- 获取配置信息： 从配置文件和shell脚本里获取信息
- 开始编译： 通过获取的信息生成编译器
- 获取入口： 通过配置文件里的entry 获取到入口文件处
- 编译模块： 编译器通过loader对代码模块进行递归编译
- 完成模块编译： 完成模块编译后，得到模块的依赖关系
- 输出内容： 通过配置文件的出口，把编译后的文件按照对应关系打包成 包含多个模块的chunk，这一步是修改内容的最后机会了
- 完成输出： 讲chunk写入到文件系统中

 以上流程 会不定时进行广播，plugins监听到感兴趣的事件 就会执行。会改变最后的输出结果

 # 常见的loader
 - cache-loader   缓存loader 在一些开销较大的loader前使用  缓存到磁盘里
 - css-loader
 - postcss-loader 扩展css  使用下一代css语法 自动补齐前缀
 - image-loader
 - ts-loader  把ts编译为js


 # 常见的plugins
 - splitChunks   代码分割
        chunks: 'all', // 要分割那些代码块 三个值all/initial/async 默认只分割异步
        minSize: 0, // 默认值是30kb，代码块的最小尺寸，大于这个尺寸就会提取出去
        minChunks: 1, // 被多少模块共享，在分割之前模块的被引用次数，达到多少次就会被分割
        maxAsuncRequests: 2, // xi
 - mini-css-extract-plugin   分离样式文件 提取单独的css文件 支持按需加载
 - common-chunk-plugins  提取公共代码
 - define-plugins  定义环境变量
 - igore-plugins  忽略部分文件


 # babel

- 主要功能是吧es6转换为es5语法
    - 把代码字符串先抽象成AST树木  解析
    - 然后通过对ASt的操作，吧es6代码转换为es5  转换
    - 根据处理后的ast 再生成为代码字符串 再建