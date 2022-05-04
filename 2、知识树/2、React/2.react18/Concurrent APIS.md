# Concurrent APIS 并发API

* 是一种可中断的渲染架构。当一个更高优先级的渲染到来时，通过放弃当前渲染，立即执行更高优先级的渲染。换来视觉上的更快的响应速度


- 由于React将渲染DOM树的机制改外了两个双向列表。并且渲染树指针只有一个，指向其中一个链表。
- 因此可以在更新完去发生后再切换指针指向，而在指针切换之前，随时可以放弃对另一棵树的修改

* 首先是第一个api StartTransition(过渡开始、延迟开始)

* 用法

```
import {startTransition } from 'react';

// 紧急更新
setInputValue(value);

// 标记回调函数内的更新为非紧急更新
startTransition(()=>{
    setSearshQuery(input)
})
```


- 被标记为非紧急渲染的函数 是可以被打断的
- 在这个例子中，渲染列表要花费的时间较多，如果用户触发输入事件setInputValue更新，那么列表更新setSearshQuery会直接停止。转而渲染setInputValue。
- 这样用户的输入可以快速反应在UI上，代价是搜索列表的响应慢了
- 而一个startTransition的打断状态可以通过isPending访问到

```
import { useTransition } from 'react';
const [isPending, startTransition] = useTransition()
```