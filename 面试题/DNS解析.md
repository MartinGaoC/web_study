* 输入域名后查找浏览器缓存
* 如果浏览器缓存没有命中，查找系统缓存
* 如何还没有命中，则请求本地域名服务器（LDNS），这台服务器一般在城市的某一个角落，百分之八十的问题都能在这里解决
* 如果（LDNS）还没命中，则会请求root server 根服务器
* 根服务返回给LDNS一个所查询区域的主域名服务器地址
* 此时LDNS发送请求给所查询区域的主域名服务器（GTLD）
* GTLD返回这个域名对于的server name地址，就是网站注册的域名服务器
* 域名服务器 根据映射关系 返回ip给LDNS
* LDNS缓存这个域名和对应的IP
* LDNS把解析的IP地址返回给用户，用户根据TTL值缓存到本地