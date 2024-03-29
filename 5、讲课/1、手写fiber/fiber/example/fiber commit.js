import elements from './element.js'


// 目的： 把虚拟DOM渲染到根节点中
let container = document.getElementById('root');
const PLACEMENT = 'PLACEMENT';

// 下一个工作单元
// fiber对象其实也是一个普通的JS对象

let workInProgressRoot  = {
  stateNode: container, //  静态节点，fiber的真实DOM
  props: {children: [elements]}, // fiber的属性
};
let nextUnitOfWork = workInProgressRoot;


function workLoop(){
  while(nextUnitOfWork){ // 下一个工作单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork) // 返回下一个工作单元
  }
  if(!nextUnitOfWork){
    commitRoot()
  }
  
}

function commitRoot () {
  let currentFiber = workInProgressRoot.firstEffect; // C1 
  while(currentFiber){

    if(currentFiber.effectTag === PLACEMENT){
      console.log('commitRoot',currentFiber.return.stateNode)
      console.log('currentFiber.stateNode',currentFiber.stateNode)

      currentFiber.return.stateNode.appendChild(currentFiber.stateNode) // 吧自己挂载到父节点上
    } 
    currentFiber = currentFiber.nextEffect;
  }
  workInProgressRoot = null;
}

/**
 * 9
 * beginWork 1、创建此fiber的真实DOM 2、通过虚拟DOM创建fiber结构 3、不处理挂载dom的逻辑
 * @param {*} workingInProgressFiber 
 */
function performUnitOfWork (workingInProgressFiber) { // workingInProgressFiber 正在工作中的fiber节点
  beginWork(workingInProgressFiber) // 创建真实DOM  创建fiber子节点， 不进行挂载

  if(workingInProgressFiber.child){ // 如果有子节点就返回
    return workingInProgressFiber.child
  }

  while(workingInProgressFiber){
    completeUnitOfWork(workingInProgressFiber)
    if(workingInProgressFiber.sibling){  // 如果有兄弟节点就返回
      return workingInProgressFiber.sibling
    }

    workingInProgressFiber = workingInProgressFiber.return // 如果都没有 指向父节点 重新寻找
  }


}

function beginWork (workingInProgressFiber){
  console.log('beginWork', workingInProgressFiber.props.id)
  // 创建真实DOM
  if(!workingInProgressFiber.stateNode){
    workingInProgressFiber.stateNode = document.createElement(workingInProgressFiber.type)
    for(let key in workingInProgressFiber.props){
      if(key !== 'children'){
        workingInProgressFiber.stateNode[key] = workingInProgressFiber.props[key];
      }
    }
  }

  // 创建子fiber
  let perviousFiber;
// child是一个虚拟DOM的数组
  if(Array.isArray(workingInProgressFiber.props.children)){
    workingInProgressFiber.props.children.forEach((child, index) =>{
      let childFiber ={
        type: child.type,
        props: child.props,
        return: workingInProgressFiber, // 
        effectTag: PLACEMENT, // 副作用标记，表示这个节点要进行什么操作
        nextEffect: null  // 下一个有副作用的节点
      }
  
      if(index === 0) {
        workingInProgressFiber.child = childFiber // 让父节点的child指向第一个子节点
      } else {
        perviousFiber.sibling = childFiber;
      }
  
      perviousFiber = childFiber
  
  
    })
  }


} 

function completeUnitOfWork (workingInProgressFiber) {
  console.log('completeUnitOfWork', workingInProgressFiber.props.id)

  // 构建副作用链，effectList，只有那些有副作用的节点

  let returnFiber = workingInProgressFiber.return; // A1
  if(returnFiber){ // 把子的副作用和自己的副作用都归到自己身上
    // firstEffect 指向第一个有副作用的子节点
    // lastEffect  指向最后一个有副作用的子节点
    // 单向链表结构，中间的节点通过next连接
    // 副作用： 这个节点有删除 插入 更新 获取数据或者dom操作
    // 子节点归并到上级
    // 根上就会出现一个副作用链条


    // 把当前fiber的有副作用子链表挂载到父亲身上
    if(!returnFiber.firstEffect){ // 如果firstEffect没有值， 就把自己的第一个节点归并到父节点上
      returnFiber.firstEffect = workingInProgressFiber.firstEffect
    }
    if(workingInProgressFiber.lastEffect){ 
      if(returnFiber.lastEffect){
        returnFiber.lastEffect.nextEffect = workingInProgressFiber.firstEffect
      }
      returnFiber.lastEffect = workingInProgressFiber.lastEffect;
    }


    // 再把自己挂到最后边
    if(workingInProgressFiber.effectTag){ // 判断一下当前是否有操作
      if(returnFiber.lastEffect){
        returnFiber.lastEffect.nextEffect = workingInProgressFiber; // 往尾部压
      } else {
        returnFiber.firstEffect = workingInProgressFiber 
      }
      returnFiber.lastEffect = workingInProgressFiber; // 指向自己本身
    }


  }

}
// 告诉浏览器在每帧的空余时间调用工作循环
requestIdleCallback(workLoop)