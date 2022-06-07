# Automatin batching  自动批处理

* batching 是指把多次的setState事件合并为一次渲染
* 开启这个特性的前提是将 ReactDom.render 替换为 ReactDom.createRoot调用方式