# useState
- useState创建的状态会被react保管
- 当调用set方法修改state后，react负责调用函数组件重新渲染组件
- 新的state会直接替换旧的state，不会进行merge操作
- 只有当state产生变化时，才会触发re-render，React通过Object.is的方法判断state是否发生变更、
# classState
- class state必须是对象，而usestate可以是基本类型
- class组件通过使用this.setState.useState直接在函数内部使用
- class会产生merge操作