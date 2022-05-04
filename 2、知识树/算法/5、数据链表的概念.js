
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。


// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2



// 示例 2:
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1


let nums = [1, 3, 5, 6]

var searchInsect = function (nums, target){
    const n = nums.length ;
    let left = 0;   // 二分查找左指针
    let right = n - 1; // 右指针
    let ans = n;
    while(left <= right){
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]){
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return ans;
}