### 处理方式

* 当用户点击页面上的url  先查找浏览器缓存，然后系统缓存，然后host文件如果没有，经过本地的DNS解析，最终将域名的解析权交给CDN专用的DNS服务器
* CDN的DNS服务器将CDN的全局负载均衡设备IP地址返回给用户
* 用户向CND的全局负载均衡设备发起请求
* CDN全局负载均衡设备 根据用户的IP，以及用户的请求url内容，选择一台所属区域的负载均衡设备，告诉用户向这台设备发起请求。
* 基于以下三条判断，区域负责均衡设备会向全局负载均衡设备返回一台缓存的服务器ip地址
    - 区域负载均衡设备根据用户IP地址，判断那一台服务器离用户最近
    - 根据用户URL请求上携带的内容名称，判断那台服务器有用户需要的乃荣
    - 查询各个服务器，判断那台服务器尚有服务你能力
* 全局负载均衡设备把服务器IP地址返回给用户
* 用户向缓存服务器发起请求，缓存服务器响应，返回给用户相应的资源。如果缓存服务器山没有，那么一直向上找到源服务器