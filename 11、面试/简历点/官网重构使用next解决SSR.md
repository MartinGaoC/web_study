* 环境变量 通过 cross-env

* Next.js 
* 原理
* 服务队接收到客户端的路由请求后，查找对应的数据，以props、context、store的形式注入组件中
* 基于react提供的api：renderToString将组件转换为html字符串输出到客户端
* 客户端使用该数据进行渲染，保证数据的一致性
* ReactSSR 之所以能实现是因为虚拟dom的存在，判断是服务端环境，可以操作js对象、把虚拟dom映射成字符串输出，判断环境是客户端环境，可以操作JS对象，将虚拟DOM映射成真实DOM，完成页面挂载


* 注意事项
* 服务端和客户端的路由机制不同，服务端通过文件路径进行匹配

* 生命周期
* getServerSideProps 服务器接到请求的时候更新


* 特殊配置
* 通过next-compose-plugins配置多个插件 如@zeit/next-stylus
* 配置css-loader解决样式引入不生效的问题，配置忽略antd或者第三方node_module里的更新操作

* 配置路由使用express配置，并返回header头 参数等路由信息