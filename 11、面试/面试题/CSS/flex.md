

# 二、基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

# 三、容器的属性
有六个属性：

flex-direction
    row（该值为默认值）：主轴为水平方向，起点在左端
    row-reverse：主轴为水平方向，起点在右端
    column：主轴为垂直方向，起点在上沿
    column-reverse：主轴为垂直方向，起点在下沿

flex-wrap
flex-flow
justify-content
    flex-start（该值是默认值）：左对齐
    flex-end：右对齐
    center：居中对齐
    space-between：两端对齐，各个项目之间的间隔均相等
    space-around：各个项目两侧的间隔相等
align-items
align-content


# 四、容器内部项目的属性
order
flex-grow
flex-shrink
flex-basis
flex
align-self