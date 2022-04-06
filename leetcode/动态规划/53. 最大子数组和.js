// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

var maxSubArray = function(nums) {
  if(nums.length === 1) return nums[0]
  let pre = 0; 
  let max = nums[0];
  nums.forEach(item => {
      pre = Math.max(pre + item, item)
      max = Math.max(max, pre)
  })
  return max
};