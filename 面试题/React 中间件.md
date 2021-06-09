* React 中间件是指action 到达reducer的时候，可以加入一些异常打印 日志上报的操作

* applyMiddlewaer
* 接受一个对象作为参数，对象的参数上有dispatch和setState两个字段
* 柯里化参数两端的具体参数是 middleware 一个是stroe.dispatch