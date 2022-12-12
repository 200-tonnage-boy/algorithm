// [i, j] 是回文的前提：[i] === [j] && [i+1, j-1] 是回文;
// 动态规划：循环对每一个点进行扩散
var longestPalindrome = function(s) {
  if(s.length < 2) return s // 长度为1是回文
  let resStr = '';
  for(let i=0; i<=s.length -1; i++) {
      check(i, i)// 验证奇回文
      check(i, i+1)// 验证偶回文
  }
  function check (l, r) {
      while(l>=0 && r <= s.length-1 && s[l] === s[r]) {
          l--;
          r++
      }
      const str = s.slice(l+1, r)// 往内缩一格，这里不会有问题，因为如果是奇，则起止点相同，长度为1；
      // 如果为偶，还是提取长度为1的字符；
      if(str.length >= resStr.length) {
          resStr = str
      }
  }
  return resStr;
};