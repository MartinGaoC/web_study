* 使用redux-saga
* redux-saga 是一个管理redux异步操作的中间件，用于代替redux-thunk
* 它通过创建Sagas将所有异步操作逻辑放到一个地方进行集中处理，把react重的同步和异步操作区分开来，以便后期的管理与维护
* takeEvery 可以让多个saga任务并行被fork执行
* takeLatest 不允许多个saga任务并行执行，收到新发起的action 就会取消前边所有fork过的任务