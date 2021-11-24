### Vue Router
* Vue-router默认是hash模式，使用url的hash来模拟一个完整的url。当url改变的时候页面不会重新加载。hash模式的url http://localhost:8000/page/#  history模式的url http://localhost:8000/page/

* 需要注意的问题，使用history模式的时候，非首页刷新会404
* 这是因为利用H5 history API来实现的，通过history.pushState方法实现URL跳转而无需重新加载页面。问题在于刷新页面的时候会走后端路由，相当于在浏览器里直接输入这个地址，要对服务器发起http请求，但是这个目标在服务器上又不存在这个路由，所以返回404.
* 解决方案： 需要在服务器进行兜底，避免url无法匹配资源能返回页面

## Nginx或Node的解决方式

```
location {
    try_files $uri $uri/ /index.html;
}
```

```
// 使用 connect-history-api-fallback这个中间件
// app.js
var history = require("connect-history-api-fallback");
var connect = require('connect')
var app = connect().use(hisroty()).listen(3000);

// 或者使用express
var express = require('express');
var app = express();
app.use(history())
```