var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) return false;
    t = t.replace(s[i], "");
  }
  console.log(t);
  return !t.length;
};

isAnagram("a", "ab")

// 解法二： 排序
// 要计算 排序级比对的复杂度 N*O（排序）
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  return [...s].sort().join('') === [...t].sort().join('');
};

// 解法3： 哈希表
var isAnagram3 = function (s, t) {

  if (s.length !== t.length) return false;
  const map = {}
  for(let i=0; i<s.length; i++) {
    const SCurrent = s[i]
    const TCurrent = t[i]
    map[SCurrent] ? map[SCurrent]++:map[SCurrent]=1;
    map[TCurrent] ? map[TCurrent]--:map[TCurrent]=-1;
  }
  return map.values().every(i => i===0)
};

// 时间复杂度N 
// 仅包含小写字母  可以利用Unicode 编码实现
//利用方法 String.prototype.codePointAt(pos)
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Array(26).fill(0)
  for(let i=0; i<s.length; i++) {
    map[s.codePointAt(i)-'a'.codePointAt(0)]++
    map[t.codePointAt(i)-'a'.codePointAt(0)]--
  }
  return map.every(item => item===0)
};