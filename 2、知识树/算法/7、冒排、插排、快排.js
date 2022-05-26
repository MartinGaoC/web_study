let nums = [3,7,2,4,1,5]


function bubbingsorts (nums) {
    let len = nums.length;

    for(let i = len; i >= 2; i--){
        for(let j = 0; j <= i - 1; j++){ // 双层for循环执行两次
            if(nums[j] > nums[j+1]){
                // let temp = nums[j];
                // nums[j] = nums[j+1]
                // nums[j+1] = temp
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }   
        }
    }
    return nums
}
// console.log(bubbingsorts(nums))

// 冒泡排序
//  两层for循环，外层从数组的length 从大到小开始递减，最小不超过2
//  内层从0开始，不超过外层 - 1，从小到大开始递增
//  两两比较判断当前的值大于 它后边下标+1的值，就交换位置
//  在比较交换的时候，要用临时变量temp存值，
//  也可以用es6结构赋值方法进行交换



function selectSort (nums){
    let len = nums.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = i; j < len; j++){
           if(nums[j] < nums[i]){
            [nums[i], nums[j]] = [nums[j], nums[i]]
           }

        }
    }
    return nums
}
// console.log(selectSort(nums))

// 选择排序
// 双层for循环，第一层从0开始，小于数组最大长度-1 ，递增
// 第二层 指针等于第一层下标，小于数组最大长度，递增
// 第一层的值在循环中相较于第二轮是不变的，相当于第一层for循环的值要和第二轮循环中数组的其他值都比较一遍
// 判断如果第二层的值小于 第一层的值，交换位置


// 插入排序

function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            console.log(i,'i')
            console.log(j,'j')
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            } else {
                break
            }
        }
    }
    return arr;
}
// console.log(insertSort(nums))

// 第一层for循环从1开始，小于数组的length，递增
// 第二层指针等于第一层循环的指针，大于0，递减
// 相当于j要和已经在队列里的值进行比较，然后进行交换






function quickSort(arr){
    if(arr.length < 1){
        return arr
    }
    let left=[],
        right=[],
        current = arr.splice(0,1);

    for(let i = 0; i< arr.length; i++){
        if(arr[i]< current){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current, quickSort(right))
}






console.log(quickSort(nums))
// 快速排序
// 先判断如果数组的长度小于1 那么返回数组,相当于递归只有一个值 就返回
// 创建左右各两个数组，选择一个基准数，选基准数的时候注意不要赋值，用splice等手段把数组的长度也降低
// 然后把剩下的数对比这个基准数 放在 两侧的数组中
// 递归对左右两侧的数组重复这个步骤
// 最后使用concat拼接


