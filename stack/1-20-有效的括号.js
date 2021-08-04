// 题目说明：
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

//     输入：s = "()[]{}"
//     输出：true
//     输入：s = "(]"
//     输出：false
//     输入：s = "([)]"
//     输出：false

// 第一次 96 ms 38.2 MB  
// 时间复杂度O（n）
// var isValid = function(s) {
//     //1.成对
//     //2.顺序，成对必须相邻
//     if(!s.length) return true// 可以加入奇数判断；
//     const dataMap = {// 可以利用Map结构，简化下面的判断，直接has
//         '(':')',// 
//         '[':']',
//         '{':'}'
//     }
//     const res = []
//     for (let i=0; i<s.length; i++) {
//         if(dataMap.hasOwnProperty(s[i])){
//             res.push(s[i])
//             continue
//         }
//         if(s[i]===dataMap[res[res.length-1]]) {
//             res.pop()
//         } else {
//             return false
//         }
//     }

//     return res.length===0?true : false
// };


// //第二次 优化奇数判断，Map结构

// var isValid2 = function(s) {
//     if(!s.length) return true
//     if(s.length % 2 === 1) return false
//     const data = new Map([['(',')'],['[',']'],['{','}']])
//     const res = []
//     console.log(data)
//     for (let i=0; i<s.length; i++) {
//         console.log()
//         if(data.has(s[i])) {
//             res.push(s[i])
//             continue
//         }
//         console.log(res[res.length-1])
//         console.log(data.get(res[res.length-1]))
//         if(s[i] === data.get(res[res.length-1])) {
//             res.pop()
//         } else {
//             return false
//         }
//     }
//     console.log(res)
//     return !res.length
// };

// // 超时
// var isValid3 = function(s) {
//     if(s.length % 2 === 1) return false
//     while(s.includes('()') || s.includes('[]') || s.includes('{}')) {
//         s.replace('()','')
//         s.replace('[]','')
//         s.replace('{}','')
//     }
//     return !s.length
// };



// new 解法1
//O(n) 
// 空间复杂度：O(n + |\Sigma|)O(n+∣Σ∣)，其中 \SigmaΣ 表示字符集，本题中字符串只包含 66 种括号，|\Sigma| = 6∣Σ∣=6。
// 栈中的字符数量为 O(n)O(n)，而哈希表使用的空间为 O(|\Sigma|)O(∣Σ∣)，相加即可得到总空间复杂度。


var isValid4 = function(s) {
    if(s.length % 2 === 1) return false
    const stack = []
    const temMap = {
        '{':'}',
        '[':']',
        '(':')'
    }
    for (let i=0;i<s.length; i++) {
        if (temMap.hasOwnProperty(s[i])) {
            stack.push(s[i])
        }else {
            if (temMap[stack[stack.length-1]]===s[i]){
                stack.pop()
            }else {
                return false
            }
        }
    }
    return !Boolean(stack.length)
};
console.log(isValid4("([}}])"))