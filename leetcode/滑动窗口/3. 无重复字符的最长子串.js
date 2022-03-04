// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



var lengthOfLongestSubstring = function(s) {
  if(s.length<2) return s.length;
let maxRes = 0;
let record = new Set();
let left=0; let right = 0;
while(right<s.length) {
   if(!record.has(s[right])) {// 右边一直扩
       record.add(s[right])
       maxRes = Math.max(maxRes, record.size)
   }else {// 发生重复了，就将左边一直插入到第一个重复的位置
       while(record.has(s[right])) {
           record.delete(s[left])
           left++
       }
       record.add(s[right])
   }
   right++
}
return maxRes
};