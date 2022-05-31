# useState
* 在函数组件中通过useState实现函数内部维护state，参数为state默认的值，返回值是一个数组，第一个值为当前的state，第二个值为更新state的函数


首先给出一个例子，如下：

import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p >
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
在函数组件中通过useState实现函数内部维护state，参数为state默认的值，返回值是一个数组，第一个值为当前的state，第二个值为更新state的函数

该函数组件等价于的类组件如下：

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p >
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
从上述两种代码分析，可以看出两者区别：

state声明方式：在函数组件中通过 useState 直接获取，类组件通过constructor 构造函数中设置

state读取方式：在函数组件中直接使用变量，类组件通过this.state.count的方式获取

state更新方式：在函数组件中通过 setCount 更新，类组件通过this.setState()

总的来讲，useState 使用起来更为简洁，减少了this指向不明确的情况
