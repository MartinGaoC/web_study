import React from 'react';
import ReactDOM from 'react-dom';

// 这里大家能理解吗，所谓的虚拟dom就是一个json对象，里边有类型，id，儿子。大家有什么问题吗

let elementJson = {
  "type": "div",
  "props": {
    "id": "A1",
    "children": [
      {
        "type": "div",
        "props": {
          "id": "B1",
          "children": [
            {
              "type": "div",
              "props": {
                "id": "C1"
              }
            },
            {
              "type": "div",
              "key": null,
              "ref": null,
              "props": {
                "id": "C2"
              },
              "_owner": null,
              "_store": {}
            }
          ]
        },
        "_owner": null,
        "_store": {}
      },
      {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
          "id": "B2"
        },
        "_owner": null,
        "_store": {}
      }
    ]
  },
  "_owner": null,
  "_store": {}
}


// js+html jsx
// 这就是所谓的虚拟dom
let element = (
  <div id="A1">
    <div id="B1">
      <div id="C1">
        <div id="D1"></div>
      </div>
      <div id="C2"></div>

    </div>
    <div id="B2"></div>
  </div>
)

// 打印一下看看
// console.log(JSON.stringify(element, null, 2))
// 1、如果节点很多，层级较深，这个遍历的过程无法中断，可能导致卡顿
// 2、JS是单线程，渲染线程和JS线程是互斥的。这种方式明显不够优化


function render (
  element,  // 虚拟dom
  parentDOM // 真实dom
  ) {

  let dom = document.createElement(element?.type); // 创建一个这种类型的dom元素

  // 处理属性
  Object.keys(element.props) // 返回props里的所有key值
  .filter(key=> key!=='children') // 过滤childer 把children先过滤一下
  .forEach(key =>{
    dom[key] = element.props[key] // 给dom添加属性，
  })
  // console.log(Object.prototype.toString.call(element?.props?.children), 'element?.props?.children')

  if(Array.isArray(element?.props?.children)){
    // 把每个子虚拟dom变成真实的dom 插入到父节点
    element.props.children.forEach(child=>render(child,dom))
  } else if(Object.prototype.toString.call(element?.props?.children) === '[object Object]') {
    render(element?.props?.children,dom)  // 单个对象 如何处理？
  }
  parentDOM.appendChild(dom)
}

// 把元素渲染到root中
render(element, document.getElementById('root'));