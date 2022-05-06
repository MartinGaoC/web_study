import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div id="A1">
    <div id="B1">
      <div id="C1"></div>
      <div id="C1"></div>
    </div>
    <div id="B2"></div>

  </div>
)

const elements = {
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
                "id": "C1"
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
console.log(JSON.stringify(element, null, 2))

function render (element, parentDOM) {
  // 创建一个真实的dom元素
  let dom = document.createElement(element.type)

  Object.keys(element.props)
  .filter(item => item !== 'children')
  .forEach(key => dom[key] = element.props[key])

  if(Array.isArray(element.props.children)){
    element.props.children.forEach((item)=>{
      render(item, dom) // 递归获取
    })
  }

  parentDOM.appendChild(dom)
}


render(element, document.getElementById('root'));