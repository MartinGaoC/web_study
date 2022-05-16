* 为什么使用wbepack或放弃webpack

* grunt
* 自动化，对需要反复重复的工作，压缩、编译等。都用配置解决
* 优点：出现的比较早
* 缺点：配置项太多，学习成本高，用的时候需要知道各种插件的配置规则

# WebPack五大模块

* 入口 entry
* 输出 output
* mode 打包模式  默认为生产模式
* loader 加载器，webpack把所有文件视为模块，但是webpack原生之能解析js文件，loader的作用就是让webpack拥有了解析非JS文件的能力
* Plugin  插件 可以扩展webpack的功能。Plugin可以监听webpack运行的生命周期中的广播事件。在合适的时机通过Webpack提供的API改变输出结果

# Webpack的构建流程
* 初始化参数：从配置文件和Shell语句中读取合并参数，得出最终参数
  ```
  let options = require('./webpack.cofg')
  ```
* 开始编译：用上一步得到参数初始化Compiler对象
  ```
  let compiler = new Compiler(options);
  ```
    * plugin也是一个类
    * 插件机制比较像发布订阅模式，核心库tapable，注册监听
    ```
    let { SyncHook } = require(tapable);
    let hook = new SyncHook();

    hook.tap('sone name' , () =>{  //  注册
        console.log("some, name")
    })
    hook.call() // 触发
    ```
* 加载所有配置插件，执行对象run方法开始编译
  ```
    if(options.plugins && Array.isArray(options.plugins)){
      for(const plugin of options.plugins){
          plugin.apply(compiler)
      }
    }
  ```
*  确定入口：根据配置中的entry找出所有的入口文件
  ```
    let { SyncHook } = require('tapable');
    class Compiler {
        constructor(options){
            this.options = options;
            this.hooks = {
                run: new SyncHook(),
                done: new SyncHook()
            }
        }
        run(){
            this.hooks.run.call() // 触发run钩子执行
            // 根据配置中的entry找出所有的入口文件
            let entry = path.join(this.options.context, this.options.entry)
        }
    }
  ```

* 编译模块：从入口出发，从入口文件出发，调用所有配置的Loader对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
  ```
    let { SyncHook } = require('tapable');
    class Compiler {
        constructor(options){
            this.options = options;
            this.hooks = {
                run: new SyncHook(),
                done: new SyncHook()
            }
        }
        run(){
            let modules = [];
            this.hooks.run.call() // 触发run钩子执行
            // 根据配置中的entry找出所有的入口文件
            let entry = path.join(this.options.context, this.options.entry)
            // 从入口文件出发，调用所有配置的Loader对模块进行编译，再找出该模块依赖的模块
            // 再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
            // 1、读取模块内容,模块内容可能是各种类型，所以需要转译
            let entryContent = fs.readFileSync(entry, 'utf8)
            let entrySource = babelLoader(entryContent) // 转换器，本质上就是一个函数
            //  module 模块 chunk 代码块  bundle 文件  的关系
            let entryModule = {id: entry, source: entrySource}
            modules.push(entryModule);


            // 把入口模块的代码转成抽象语法树ATS，分析里面的import和require依赖
        }
    }
  ```
* 完成模块编译：在经过用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
* 输出资源：根据入口和模块之间的依赖关系，组成一个个包含多个模块的Chunk，再把每个Chunk转成一个单独的文件加入到输出列表，这步是修改输出内容的最后机会
* 输出完成：确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统







* Webpack工作流程

* 首先先从配置文件和shell命令行里整合 配置信息
* 开始编译： 用上一步的到的参数 生成Compiler（编译器对象）
* 加载所有配置的插件：执行Compiler的run方法开始执行编译
* 确定入口：通过配置中的entry找到所有入口文件
* 编译模块：从入口文件出发，调用所有配置Loader对模块进行编译，再找出该模块以来的模块 递归循环编译
* 完成模块编译，再经过loader编译完成所有模块之后。得到模块最终编译内容和它们之间的依赖关系
* 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件加入输出列表。这步是可以修改内容的最后机会
* 输出完成：在确定好输出内容后，根据确定输出的路径和文件名，把文件内容写入到文件系统
* plugin执行时间：在上边的过程中，Webpack会在特定的时间广播特定的事件，插件在监听到感兴趣的事件后，会执行特定的逻辑，并且插件可以调用Webpack提供的API改变Webpack运行的结果