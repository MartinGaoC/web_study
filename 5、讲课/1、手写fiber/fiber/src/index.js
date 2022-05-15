import React from 'react';
import ReactDOM from 'react-dom';





let element = (
    <div id="A1">
        <div id="B1">
            <div id="C1"></div>
            <div id="C2"></div>

        </div>
        <div id="B2"></div>

    </div>
)

let elementDOM = {
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
                "props": {
                  "id": "C2"
                }
              }
            ]
          }
        },
        {
          "type": "div",
     
          "props": {
            "id": "B2"
          }
        }
      ]
    }
  }

  // 1、如果层级特别多，特别深，无法暂停。可能会导致页面的卡顿
  // 2、JS单线程，渲染和JS是互斥的，
function render(
    element, // 虚拟DOM
    parentDom // 真实DOM
){
    // 创建DOM元素
    let dom = document.createElement(element.type)

    Object.keys(element.props)
    .filter(item=> item !== 'children')
    .forEach(key=>{
        dom[key] = element.props[key] // 属性挂载
    })

    if(Array.isArray(element.props.children)){
        element.props.children.forEach(child=>{
            console.log(JSON.stringify(child, null, 2), 'child')
            render(child, dom)
        })
    }
    parentDom.appendChild(dom)

}
render(element, document.getElementById('root'))
