import element from './element'

// 注释：目的， 把虚拟dom通过fiber的方式渲染到跟节点里
let container = document.getElementById('root'); // 1、把虚拟dom渲染道真实dom里
const PLACEMENT = 'PLACEMENT'


// 3、下一个工作单元
// 6、fiber其实也是一个普通的JS对象
let nextUnitOfWork = {
  stateNode: container, // 7、此fiber对应的DOM节点
  props: {children:[element]}, // 8、fiber的属性
  // child,  // 11、fiber的数据结构
  // return,
  // sibling
};

function workLoop (deadline) { // 2、 工作循环
  // 5、如果有当前的工作单元，就执行它，返回下一个工作单元
  while(nextUnitOfWork && deadline.timeRemaing() > 0){ //注释：新增判断deadline
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
}


/**
 * 9
 * beginWork 1、创建此fiber的真实DOM，通过虚拟DOM创建fiber结构
 * @param {*} workingInProgressFiber 
 */
function performUnitOfWork(workingInProgressFiber) { // 注释：正在工作中的fiber
  // 10、1、创建真实DOM，但是并不挂载  2、创建fiber子树
  beginWork(workingInProgressFiber)

  if(workingInProgressFiber.child){
    return workingInProgressFiber.child // 11、如果有子元素返回子元素
  }

  while(workingInProgressFiber){
    // 14、如果没有儿子当前节点其实就结束完成了
    completeUnitOfWork(workingInProgressFiber)
    if(workingInProgressFiber.sibling){
      return workingInProgressFiber.sibling // 12、如果有兄弟元素返回兄弟元素
    }
    workingInProgressFiber = workingInProgressFiber.return // 13、先指向父虚拟节点，然后继续循环，找到了父虚拟节点的兄弟节点
  }
}

function beginWork(workingInProgressFiber){
  console.log('beginWork', workingInProgressFiber.props.id)
  // 注释：第一步要创建节点
  if(!workingInProgressFiber.container){
    workingInProgressFiber.stateNode =  document.createElement(workingInProgressFiber.type) // 创建真实dom节点
    for(let key in workingInProgressFiber.props){
      if(key !== 'child'){
        workingInProgressFiber.stateNode[key] = workingInProgressFiber.props[key]
      }
    } // 16、注意，在beginWork中不会进行挂载，下面创建fiber
  }

  let perviousFiber;
  workingInProgressFiber.props.children.forEach((child, index)=>{ // 注释：注意这里是一个虚拟DOM的数组，我们需要把虚拟DOM变成fiber树
    let childFiber = {
      type: child.type,
      props: child.props,
      return: workingInProgressFiber, // 注释：为什么叫return，这里有返回的意思所以要return，要让父亲完成
      effecTag: PLACEMENT, // 17、副作用Tag标记，这个fiber对应的DOM节点需要被插入到父dom中
      nextEffect: null // 注释：先不讲，下一个有副作用的节点
    }

    if(index === 0){ // 注释：索引为0意味着他是大儿子，所以要赋值
      workingInProgressFiber.child = childFiber
    } else {
      perviousFiber.sibling = childFiber;
    }
    perviousFiber = childFiber
  })
}

function completeUnitOfWork(workingInProgressFiber){ // 注释：完成工作循环
  console.log('completeUnitOfWork', workingInProgressFiber.props.id)
  // 18、构建副作用链条effectList，只有那些有副作用的节点
}


// 4、告诉浏览器在空闲的时候运行workLoop
requestIdleCallback(workLoop)