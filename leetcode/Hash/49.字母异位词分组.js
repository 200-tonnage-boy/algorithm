// 解法1： 循环+判断异位词  n平方
const isWord = (s, t) => {
  if (s.length !== t.length) return false;
  const map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.codePointAt(i) - "a".codePointAt(0)]++;
    map[t.codePointAt(i) - "a".codePointAt(0)]--;
  }
  return map.every((item) => item === 0);
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  while (strs.length) {
    const curr = strs.shift();
    const currArr = [curr];
    let nextIndex = strs.findIndex((item) => isWord(curr, item));
    while (nextIndex >= 0) {
      currArr.push(strs[nextIndex]);
      strs.splice(nextIndex, 1);
      nextIndex = strs.findIndex((item) => isWord(curr, item));
    }
    res.push(currArr);
  }
  return res;
};



// 核心还是在于哈希函数，怎么去映射key value

//解法二  使用排序去做key值
var groupAnagrams2 = function(strs) {
  const res = {}
  for (let i=0; i<strs.length; i++) {
    const sortStr = [...strs[i]].sort().join('')
    res[sortStr] ? res[sortStr].push(strs[i]) : res[sortStr]=[strs[i]]
  }
  return Object.values(res)
};

// 解法三 使用字符编码数组去做key值
var groupAnagrams2 = function(strs) {
  const res = {}
  for (let i=0; i<strs.length; i++) {
    const temArr = new Array(26).fill(0)
    for (let j=0; j<strs[i].length; j++) {
      temArr[strs[i][j].codePointAt(0) - "a".codePointAt(0)]++;
    }
    // 注意这个地方，引用类型做key值，会被转换为字符串
    res[sortStr] ? res[sortStr].push(strs[i]) : res[sortStr]=[strs[i]]
  }
  return Object.values(res)
};

