* hash 模式： 即地址栏 URL 中的#符号，例如 aaaa.com/#…，hash 的值为#/aaa 其特点在于：hash 虽然在 url 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面
* history 模式： 利用了 HTML5 History Interface 中新增的 pushState()和 replaceState()方法 -- 需要特定浏览器的支持。

