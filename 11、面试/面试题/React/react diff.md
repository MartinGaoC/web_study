* React 通过引入 Virtual DOM 的概念，极大地避免无效的 DOM 操作，使我们的页面构建效率得到了极大的提升。但是如何高效地通过对比新旧 Virtual DOM 来找出真正的 DOM 变化之处同样决定着页面的性能，React 用其特殊的 diff 算法解决了这个问题。Virtual DOM +React diff 的组合极大地保障了 React 性能，使其在业界内有着不错的性能口碑。diff 算法并非 React 首创，React 只是对 diff 算法做了一个优化，但却是因为这个优化，给 React 带来了极大的性能提升。

# React dom-diff 策略
Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计

拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。

对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

基于以上三个前提策略，React 分别对 tree diff、component diff 以及 element diff 进行算法优化。

1. tree diff
基于策略 
* React 对树的算法进行简洁明了的优化，即对树进行分层比较，两棵树只会对同一层次的节点进行比较，不跨层比较。
* 只有删除、创建操作没有移动
由于 DOM 节点跨层级的移动操作少到可以忽略不计，针对这一现象，React 通过 updateDepth 对 Virtual DOM 树进行层级控制，只会对同一个父节点下的所有子节点进行比较。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。 这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。

2. component diff
React 是基于组件构建应用的，对于组件间的比较所采取的策略也是简洁高效。

如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。

如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。

对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点，可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate()来判断该组件是否需要进行 diff。

3. element diff

当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERTMARKUP (插入)、MOVEEXISTING (移动)和 REMOVE_NODE(删除)

INSERT_MARKUP，新的 component 类型不在老集合里，即是全新的节点，需要对新节点执行插入操作。

MOVE_EXISTING，在老集合有新 component 类型，且 element 可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下 preChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。

REMOVE_NODE，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。

允许开发者对同一层级的同组子节点，添加唯一 key 进行区分