// 给定一个值包括 '(',')','{','}','[',']'的字符串s，判断字符串是否有效
// 有效字符串需要满足
// 左括号必须用相同类型右括号闭合
// 左括号必须以正确的顺序闭合
// 返回true或者false


/**
 * 
 */

// let isValid = function (s) {
//     console.log(s.length, 'length')
//     const n = s.length;
//     if(n % 2 === 1){
//        return false  // 如果是奇数直接返回false
//     }

//     const pairs = new Map([ // 创建一个key 为闭合括号，值为开始括号的Map
//         [')', '('],
//         [']', '['],
//         ['}', '{']
//     ])
//     const stk = [] // 模拟栈
//     for(let ch of s) { // 循环字符串
//         if(pairs.has(ch)){ // 如果字符串中包含
//             console.log(ch, 'ch')
//             console.log(stk, 'stk')

//             if(!stk.length || stk[stk.length - 1] !== pairs.get(ch)){ // 取出栈顶的左括号、如果不是相同类型或者栈中没有左括号
//                 return false
//             }
//             stk.pop()
//         } else {
//             stk.push(ch)  // 1、题干和Map key值判断，只会先出现左括号，所以先把左括号都压入栈
//         }
//     }

//     return !stk.length; // 判断栈中还有没有值，有说明没有完全匹配

// }




let isValid = function(s){
    let n = s.length;
    if(n % 2 === 1){
        return false
    }
    let pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    let sdk = []
    for(let ch of s) {
        if(pairs.has(ch)){
            if(!sdk.length || sdk[sdk.length -1] !== pairs.get(ch)){
                return false
            }
            sdk.pop();
        } else {
            sdk.push(ch)
        }
    }
    return !sdk.length;
}


console.log(isValid(`(){}({}[])`))