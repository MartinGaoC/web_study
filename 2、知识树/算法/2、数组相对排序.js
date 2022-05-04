

// 给定两个数组，arr1 和 arr2:

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。



let arr1 = [1, 9, 3, 10, 2]
let arr2 = [1, 2,10,7,6 ]
// 用两个数组记录元素出现次数，然后计数排序+过滤
var relativeSortArray = function (arr1, arr2) {
     let hat = [];                               // 创建一个新数组
     let map1 = new Array(1001).fill(0);         // 创建一个长度1001的数组并且全部填充为0
     let map2 = new Array(1001).fill(0);         // 创建一个map2长度1001的数组并且全部填充为0
              
    arr1.forEach((val)=> map1[val]++)            // forEach循环把传入的数组值当作下标标记到map中，两个数组都做
    arr2.forEach((val)=> map2[val]++)            
    let ind = 0;
    for(let i = 0; i < arr2.length; i++){
        while(map1[arr2[i]]--) hat[ind++] = arr2[i]  // 循环arr2，如果arr2里的值命中map1里的标记，则通过判断赋值给新数组hat
    }
    console.log(arr1.filter(val=>map2[val]===0).sort())

    return [...hat, ...arr1.filter(val=>map2[val]===0).sort()]  // 对arr1使用过滤器filter进行过滤，如果arr1里的值匹配map2中的标记没命中的话，则被过滤。接着进行sort排序
};

console.log(relativeSortArray(arr1, arr2), 'relativeSortArray')