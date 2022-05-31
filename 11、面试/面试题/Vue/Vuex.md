# Vuex

Action

一些对 State 的异步操作可放在 Action 中，并通过在 Action 中 commit Mutation 变更状态

Action 可通过 store.dispatch() 方法触发,或者通过 mapActions 辅助函数将 vue 组件的 methods 映射成 store.dispatch()调用

Mutation

在 vuex 的严格模式下，Mutaion 是 vuex 中改变 State 的唯一途径

Mutation 中只能是同步操作

通过 store.commit () 调用 Mutation

总结

mutations 可以直接修改 state,但只能包含同步操作，同时，只能通过提交 commit 调用。actions 是用来触发 mutations 的，它无法直接改变 state,它可以包含异步操作,它只能通过 store.dispatch 触发
