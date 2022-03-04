给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。


var minSubArrayLen = function(target, nums) {
  let res = Infinity;
  let left = 0; let right = 0; let sum = 0
  while(right < nums.length) {// 与第3.题类似思路
      sum += nums[right]
      if(sum < target) {
          right++
      }else {
          while(sum >=target) {
              sum -= nums[left]
              left++
          }
           res = Math.min(res, right - left+2)
          right++
      }
  }
  return res===Infinity? 0: res
}
