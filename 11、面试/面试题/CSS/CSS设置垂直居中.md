1. 使用弹性盒子
    ```
    .use-flexbox{
        display:flex;
        align-items:center;
        justify-content:center;
        width:200px;
        height:150px;
        border:1px solid #000;
    }
    .use-flexbox div{
        width:100px;
        height:50px;
        background:#099;
    }
    ```
2. 绝对定位
    - 通过子元素设置absolute 上下左右都为0，margin：auto实现

3. transform
    - 子元素设置transform: translateY(-50%)

4. 设置行高
   - line-height