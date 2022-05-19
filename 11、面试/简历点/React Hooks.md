## React Hooks实现原理
* React会维护两个链表，一个是CurrentHook，一个是WorkingProgressHook
* 每一个节点类型都是hook
* 函数式组件之所以可以做一些class才能做到的事情就是因为hook对象
* 函数式组件的状态、计算值、缓存的函数都是交给hook管理的
* hook通过Fiber.memoizedState和调用它的组件关联起来
* Fiber.memoizedState永远指向hooks链表的头部

* Hooks的串联不是一个数组，是一个链式的数据结构
* 从根节点workInProgressHook向下通过next进行串联
* 所以不能嵌套使用、不能在条件判断中使用、不能再循环中使用


## React hooks使用理由
* React16之前，函数式组件都是纯函数，没有自己的状态
* React16之后，官方推出了fiber架构以及hooks，hooks让组件可以管理一份自己的状态
* hooks解决了之前类组件的问题，如：组件服用逻辑难，组件嵌套过深、难以记忆的生命周期
* hooks提供的API
* useState 返回状态值，以及更新这个状态值的函数
* useEffect 接受包含命令式，可能有副作用的代码
* useContext 接受上下文对象，并返回当前上下文
* useCallback 返回一个缓存的版本，针对可能被重新创建的函数进行优化，避免冗余更新
* useMemo  针对不必要的计算进行优化，避免组件中的一些冗余计算操作