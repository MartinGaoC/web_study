# bable的编译过程
* babel是一个JS编译器，是一个工具链，主要用于es6 转换为es5

* Babel本质上就是在操作AST来完成代码的编译
* AST：源代码语法结构的一种抽象表示，树状的形式表现编程语言的语法结构，节点等于源代码中的一种结构

* 第一个阶段解析（Parse）：
    - 将源代码转换成AST
    - 词法分析：字符流源代码（Char Stream）转换成令牌流（Token Stream）
    - 语法分析：令牌流转换为抽象语法树
* 二阶段 转换（Transform）
    - 通过babel的插件能力，把高版本AST转换成低版本AST
* 三阶段 生成（Generate）
    - AST转换为字符串形式的低版本代码，同时创建Source Map映射