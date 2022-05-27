1.概念
# BFC(Box Formatting Context):Box是css布局的对象和基本单位，BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。 块级格式化上下文布局规则

1.内部的BOX会在垂直方向一个接一个的放置
2.属于同一个BFC的两个相邻BOX的margin会重叠；不同BFC就不会
3.是页面上一个隔离的独立容器，里面的元素不会影响到外面的元素；反之亦然
4.BFC的区域不会和float box重叠
5.计算BFC的高度，浮动元素也参与计算
2.触发条件
触发条件简要概括

根元素
    float属性不为none
    position为absolute或fixed
    overflow不为visible
    display为inline-block、table-cell、table-caption、flex、inline-flex
3.应用场景
1)清除内部的浮动，触发父元素的BFC属性，会包含float元素
  防止浮动导致父元素高度塌陷父级设置overflow：hidden，元素float:right
2)分属于不同的BFC，可以阻止margin重叠
  避免margin重叠，两个块相邻就会导致外边距被折叠，给中间的设置BFC就会避免，方法就是套个父级设置overflow：hindden
3)阻止元素被浮动元素覆盖，各自是独立的渲染区域；
4)自适应两栏布局