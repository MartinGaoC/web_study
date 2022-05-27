* react16.8加入了hooks

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

# useEffect

- 可以将useEffect类比为class组件中的生命周期，接受两个参数，第一个参数是函数，第二个是deps，可以返回一个函数，我们叫它清除函数
- 当deps为空数组时，useEffect会在组件加载完成后执行一次，清除函数在组件卸载时执行
- 当deps是一个具有变量的数组时，当deps中变量改变时，会重新执行这个函数，每次deps改变时也会执行清除函数
- deps如果不传值则会在每次组建render时执行这个函数和清除函数
# useCallback
- useCallback一般用来缓存函数，加少不必要的更新，接受一个函数和deps，当deps么有变量为空数组，或者数组中变量未发生改变，该函数引用都不会改变，当没有deps时，每次都会返回一个新的函数
# useMemo
- useMemo一般用来缓存一个计算值，可以是一个变量也可以是ReactNode，接受一个函数这个函数要返回一个值和deps，同样当deps为空数组，这个值就是第一次计算出的值，不会改变，当deps中变量改变，会重新计算这个返回值，当没有deps，每次都会重新计算