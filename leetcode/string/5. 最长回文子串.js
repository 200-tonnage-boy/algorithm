/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  // 循环遍历，对每一项来说有两种可能，奇数和偶数，因此是以i向两边扩散，还有以i+1向两边扩散
  if(s.length <=1 ) return s;
  let res = '';
  for(let i=0; i < s.length; i++) {
      const odd = getString(s, i, i)
      const even = getString(s, i, i+1)
      res = res.length > odd.length ? res : odd;
      res = res.length > even.length ? res : even;
  }
  return res

};

const getString = (s='', l, r) => {
  while(l>=0 && r<s.length && s[l]===s[r]) {
      l--;
      r++;
  }
  return s.slice(l+1, r)
}
longestPalindrome("babad")
console.log(longestPalindrome("a"));