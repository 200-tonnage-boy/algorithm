// 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。

// 返回 只删除一个 子数组可获得的 最大得分 。

// 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。

// 与3题思路一样
var maximumUniqueSubarray = function(nums) {
  const record = new Set()
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = 0;
  while(right < nums.length) {
      const rValue = nums[right]
      if(!record.has(rValue)) {
          record.add(rValue)
          sum += rValue;
          res = Math.max(res, sum)
      }else {
          while(record.has(rValue)) {
              record.delete(nums[left])
              sum -= nums[left]
              left++
          }
           record.add(rValue)
          sum += rValue;
          res = Math.max(res, sum)
      }
      right++
  }
  return res
};
