// 给定一个数组，找出可以盛放水量最大的容器
const arrWater = [1, 8, 6, 2, 5, 4, 8, 3, 7]


// const maxArea = function (arr) {
//     let max = 0;
//     for(let i = 0; j = arr.length - 1; i < j) { // 双指针，头小于尾 一直循环
//         const minHeight = arr[i] < arr[j] ? arr[i++] : arr[j--]
//         console.log(i, 'i')
//         console.log(j, 'j')

//         console.log(minHeight, 'minHeight')
//         const area = minHeight * (j - i + 1)
//         max = Math.max(max, area)
//     }
//     console.log(max, 'max')
//     return max
// }
var maxArea = function(height) {
    let max = 0;
    for(let i = 0,j = height.length - 1; i < j;){
        const minHeight = height[i] < height[j] ? height[i++] : height[j--] // 找出每次循环中的最小的高度，双指针两边往中心推进
        // 找出最短边
        // console.log(height[i], 'i')
        // console.log(height[j], 'j')
        console.log(i, 'i')
        console.log(j, 'j')
        console.log(minHeight, 'minHeight')
        console.log(j - i + 1, 'j - i + 1')

        const area = minHeight * (j - i + 1) 
        // (j - i + 1) 找到最短边时双指针的距离 ，通过相减+1得到
        // 长宽两条边相乘得到每次的面积  然后 找最大值
        max = Math.max(max,area)
    }
    return max


};
maxArea(arrWater);