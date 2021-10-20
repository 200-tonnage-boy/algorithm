// // 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// // 有效括号组合需满足：左括号必须以正确的顺序闭合。

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

var generateParenthesis = function(n) {
  const res = []
  t(n, 0, 0, '',res);
  return res
};

const t = (n, left, right, str,res) => {
  if (n<1) return;
  if (left === n&&right===n) {
    res.push(str)
  }
  if (left<n) {
    t(n, left+1, right, str+'(', res)
  }
  if (right < left) {
    t(n, left, right+1, str+')', res)
  }
}

console.log(generateParenthesis(3));