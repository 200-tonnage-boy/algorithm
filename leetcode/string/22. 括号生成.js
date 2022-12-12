var generateParenthesis = function(n) {
  let res = []
  function generate (str, leftRes, rightRes) {
      if(str.length === 2*n) {
          res.push(str)
      }
      if(leftRes>0) {
          // 不能用右括号
          generate(str+'(', leftRes-1, rightRes)
      }
      if(rightRes > 0 && leftRes<rightRes) {
          generate(str+')', leftRes, rightRes-1)
      }
  }
  generate('', n, n)
  return res
};