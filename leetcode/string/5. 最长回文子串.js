var longestPalindrome = function(s) {
  if(!s.length) return s;
  let res = '';
  for(let i = 0; i< s.length; i++) {
      const j = getStr(s, i, i)
      const o = getStr(s, i, i+1)
      res = res.length > j.length ?  res: j;
       res = res.length > o.length ?  res: o;
  }
  return res
};

const getStr = (s, left, right) => {
  while(left >=0 && right<s.length&&s[left]===s[right]) {
      left--;
      right++
  }
  return s.slice(left, right+1)
}

longestPalindrome("babad")
console.log(longestPalindrome("babad"));