import elements  from "./element";


let container = document.getElementById('root');

const PLACEMENT = 'PLACEMENT'
// 下一个工作单元
let workInProgressRoot  = {
  stateNode: container, //  静态节点，fiber的真实DOM
  props: {children: [elements]}, // fiber的属性
};
let nextUnitOfWork = workInProgressRoot;


function workLoop(){
  while(nextUnitOfWork){ 
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork) // 返回下一个工作单元
    console.log(nextUnitOfWork, 'nextUnitOfWork')

  }
}

function performUnitOfWork (workingInProgressFiber) { // workingInProgressFiber
  beginWork(workingInProgressFiber)
  if(workingInProgressFiber.child){
    return workingInProgressFiber.child
  }
  while(workingInProgressFiber){
    if(workingInProgressFiber.sibling){
      return workingInProgressFiber.sibling
    }
    workingInProgressFiber = workingInProgressFiber.render;

  }


}

function beginWork (workingInProgressFiber) {
  console.log(workingInProgressFiber, 'workingInProgressFiber')
  if(!workingInProgressFiber.stateNode){
    workingInProgressFiber.stateNode = document.createElement(workingInProgressFiber.type);
    for(let key in workingInProgressFiber){
      if(key !== 'children'){
        workingInProgressFiber.stateNode[key] = workingInProgressFiber.props[key];
      }
    }
  }

  // 创建子fiber
  let perviousFiber;

  if(Array.isArray(workingInProgressFiber.props.children)){
    workingInProgressFiber.props.children.forEach((item,index)=>{
      let childFiber={
        type: item.type,
        props: item.props,
        return: workingInProgressFiber,
        effectTag:PLACEMENT
      }

      if(index === 0) {
        workingInProgressFiber.child = childFiber
      } else {
        perviousFiber.sibling = childFiber
      }
      perviousFiber = childFiber

    })
  }




}

requestIdleCallback(workLoop)