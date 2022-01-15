var lengthOfLongestSubstring = function(s) {
  // 滑动窗口，右侧持续往右滑动，滑动到有重复的情况，就删除左侧；set就是记录的当前的长度
  if(!s.length) return 0;
  let left = 0, right = 0, record = new Set(), maxRes = 0;
  for(right; right<s.length; right++) {
      if(!record.has(s[right])) {
          record.add(s[right])
          maxRes = Math.max(maxRes, record.size)
      } else {
          while(record.has(s[right])) {
              record.delete(s[left])
              left++
          }
          record.add(s[right])
      }
  }
  return maxRes
};
lengthOfLongestSubstring('abcabcbb')