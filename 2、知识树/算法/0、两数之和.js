let nums = [1,2,3,4]

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
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let x = target - nums[i] // 目标值每次减去轮训的值
        console.log(x, 'x')
        console.log(map.has(x), 'map.has(x)')
        if(map.has(x)){ // 判断如果map中存在差值，那么返回他们的下标
            return [map.get(x), i]
        }
        map.set(nums[i], i)  // 存入值为key 下标为value的值
    }
};

console.log( twoSum(nums, 7))