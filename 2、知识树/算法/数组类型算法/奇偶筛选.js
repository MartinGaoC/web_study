// # 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分

// * 双指针法
// * 第一个指针从第一个元素到数组尾部
// * 第二个指针从数组最后向头部出发
// * 第一个指针遍历偶数，第二个指针遍历奇数


function reOrderArray(array){
    if(Array.isArray(array)){
        let start = 0;
        let end = array.length - 1;
        while(start < end) {
            console.log(start,'start')
            console.log(end, 'end')
            while(array[start] % 2 === 1){
                console.log(array[start] % 2, 'array[start] % 2')
                start++
            }
            while(array[end] % 2 === 0){
                end--
            }
            if(start < end){
                [array[start], array[end]] = [array[end], array[start]]
            }
        }
    }
    return array;
}



console.log(reOrderArray([2,1,3,4,3,8,4,9,12,11]))