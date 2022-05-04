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

let elements = {
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
  },
  "_owner": null,
  "_store": {}
}

// 不能暂停，耗费资源
// 层级过深容易造成卡顿

render(element, document.getElementById('root'))

function render (element, parentDOM) {
  // 创建真实DOM
  let dom = document.createElement(element.type)

  Object.keys(element.props)
  .filter((key) => key!=='children')
  .forEach(item=> dom[item] = element.props[item])

  if(Array.isArray(element.props.children)){
    element.props.children.forEach((item)=>{
      render(item, dom)
    })
  }

  parentDOM.appendChild(dom)
}
