* getStaticProps  获取静态数据  在构建时获取数据  不建议使用
* getStaticPaths  获取静态路由： 指定根据数据预渲染页面的动态路由， 静态的预渲染使用动态路由的页面
* getServerSideProps 获取服务端渲染数据：  请求接口数据的位置  getStaticProps 的替代