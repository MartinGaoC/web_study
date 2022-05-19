# CLI
### 构建一个自己的CLI工具
* 顶层设计，拆分为五个独立的模块,使用lerna进行统一管理
* CLI: 负责处理接收命令行命令以及读取命令参数 包含 commander(命令行解决方案)、chalk（美化控制台输出）、minmist（参数解析）等功能
    - 1、如何定义命令？
      - 使用commander模块进行命令定义
      ```
      const program = require(commander) // 引入commander模块
      ```  
    - 2、hello world 使用commander构建自己的第一个create命令
      ```
      const program = require(commander)
      const chalk = require(chalk)       
      const minimist = require(minimist) // 解析命令行选项模块
      program
        .command('create <app-name>')  // 添加create 创建命令、<app-name>为自定义项目名称
        .description('create a new project powered by fig-cli')  // 描述 "创建一个由fig-cli支持的新项目"，会显示在help界面
        .option('-f, --force', 'Overwrite target directory if it exists'))   // 自定义命令 -f 如果目标目录存在 就覆盖它，如果用户使用自定义命令，后续create过程中会拿到自定义参数做相应的操作
        .action((
            name,         // name 会获取到刚才用户传入的项目名称
            options       // options 会获取到用户传入的自定义命令，以数组的形式返回
        ) =>{
            require('@base/fig-create')(name, options); // 将获取到的项目名称和参数导入下一个创建模块
        })

      ```
      - 答：
    - 知识点：通过chalk模块进行提示以及美化提示
      - 答： 
    - 知识点：如何获取命令行用户配置的参数？
      - 答：使用minimist模块
    - 知识点：通过commander模块构建create命令流程
      - 答：
    - 知识点：通过commander构建run命令流程
      - 答：
    - 知识点：通过commander构建deploy命令流程
      - 答：
    - 知识点：输入不存在的命令怎么办？
      - 答：
* Create：获取到必要的命令行参数后，负责初始化项目，通过用户选择不同的仓库从远程仓库拉取项目
    - 创建流程
      - 获取路径信息
      - 维护远程仓库列表、从远程拉取
      - 用户选择列表，拿到用户需要构建的项目类型后对特殊项目进行特殊配置列表提示
      - 开始创建项目
        - 获取到的参数配置
        - 拉取远程仓库代码
        - 询问是否需要初始化依赖项
        - 创建成功
* Run：负责项目的运行构建，以及Webpack打包等工作,并提供以下可执行命令
    - build
    - start
    - help
    - test
    - init
    - webpack构建优化
* figDevUtils: 负责存储脚手架项目各个模块的公共方法
* deploy: 负责项目的上传部署工作








* 使用lerna优化托管在git/npm上的多pageage代码库的工作流的一个管理工具，可以在主项目下管理多个子项目



* 通过命令行拉取不同的脚手架仓库生成不同配置的项目
  
    - 如何通过命令行接收命令？
    - 通过process对象  process.env.FIG_ENV = this.env,命令行变量 设置成为node全局变量
    - 
    - 通过在package.json  bin 字段配置
    - 把fig命令挂载到全局  fig命令路径指向 usr/local/bin/fig.js
    - feup 命令 git开源


    - commander 模块，配置项目命令
      - on command:* 匹配未知命令
      - -m 
      - -e 环境变量
      - process.env.slice() 捕获命令行第三个选项
    - 包管理


- 通过commander定义命令行命令，
- 创建项目 通过选项拉取不同的git仓库，git仓库地址通过赛博坦配置 包括仓库地址+分支


- 执行run命令 默认执行package.json main 字段



* WebpackDevServer

cli 脚手架
create 创建
develop 资源 七牛
fig-dev-utils 一些公共项
run  打包编译跑项目