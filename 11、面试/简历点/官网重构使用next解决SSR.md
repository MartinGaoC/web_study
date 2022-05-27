* 环境变量 通过 cross-env来适配多个平台，主要是兼容性
* 通过node的全局变量process.env.PORT来获取监听的端口
* 通过express来设置路由渲染

* Next.js 
* 原理
* 服务队接收到客户端的路由请求后，查找对应的数据，以props、context、store的形式注入组件中
* 基于react提供的api：renderToString将组件转换为html字符串输出到客户端
* 客户端使用该数据进行渲染，保证数据的一致性
* ReactSSR 之所以能实现是因为虚拟dom的存在，判断是服务端环境，可以操作js对象、把虚拟dom映射成字符串输出，判断环境是客户端环境，可以操作JS对象，将虚拟DOM映射成真实DOM，完成页面挂载

- 所有前端的SSR基本原理都是一致的，即：基于一套代码同时运行在server端和client端，根据用户请求的路由来判断由哪端来渲染，要保证服务端和客户端数据一致性就需要将服务端获取到的数据以字符串的形式返回给客户端，客户端直接以该数据进行渲染。对React而言，其主要是用到了next框架，其和nuxtjs（vue的ssr框架）不同主要在于针对了react框架进行了相关的处理

* 注意事项
* 服务端和客户端的路由机制不同，服务端通过文件路径进行匹配

# 生命周期
* getServerSideProps 服务器接到请求的时候更新


# 特殊Webpack配置
* 通过next-compose-plugins进行多插件配置  
* 配置@zeit/next-stylus @zeit/next-css next-fonts 对css和文件进行处理
* 配置css-loader解决样式引入不生效的问题，配置忽略antd或者第三方node_module里的更新操作

* 配置路由使用express配置，并返回header头 参数等路由信息



* 