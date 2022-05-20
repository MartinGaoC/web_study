let nums = [1,1,3,4]

// function twonums (nums, target) {
//     let map = new Map();
//     for(let i = 0; i< nums.length; i++){
//         let x = target - nums[i];
//         if(map.has(x)){
//             return [map.get[x], i]
//         }
//         map.set(nums[i], i)
//     }
// }
var twoSum = function(nums, target) {
    let map = new Map(); // 先来一个map
    for(let i = 0; i < nums.length; i++){
        let x = target - nums[i] // 目标值每次减去轮训的值
        console.log(x, 'x')
        console.log(i, 'i')

        if(map.has(x)){ // 判断如果map中存在差值，那么返回他们的下标
            return [map.get(x), i]
        }
        map.set(nums[i], i)  // 存入值为key 下标为value的值
        console.log(map, 'map.has(x)')

    }
};

console.log( twoSum(nums, 88))

// 总结：
// 先new一个Map数据结构
// 然后循环nums
// 用目标值target - 循环的值 得到差值x
// map中存入key 为数组每项 value为数组下标的键值对
// 判断 如果 map中存在差值，
// 那么差值的下标，和当前循环所处的下标就是两个值的下标
