// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。


let nums = [4,3,2,7,8,2,3,1]
var findDisappearedNumbers = function (nums) {
    
    const n = nums.length;

    for(const num of nums){
        // console.log(num, 'num')
        const x = (num -1 ) % n
        console.log(x, 'x')
        nums[x] += n;
    }
    console.log(nums, 'nums')
    console.log(nums.entries(), 'nums')

    const ret = [];
    for (const [i, num] of nums.entries()){
        // console.log(i, 'i')
        console.log(num, 'num')
        if(num <= n){
            console.log(i, 'i')
            ret.push(i+1)
        }
    }
    return ret

};

findDisappearedNumbers(nums)