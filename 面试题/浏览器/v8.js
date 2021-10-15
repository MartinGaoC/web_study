console.log(process.memoryUsage());


/**
  {
    rss: 20,348,928,    所有内存
    heapTotal: 4,022,272, 申请到的堆内存
    heapUsed: 3,147,800,  使用到的堆内存
    external: 252,227,  V8管理的绑定到JS的C++对象的使用情况
    arrayBuffers: 10778 数组缓存
  }
 */

//  新生代  老生代  堆内存

// 栈内存只放一些地址

// 垃圾回收机制， 几十毫秒一次  判断计数机制