// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。// 二分法

// 输入：nums = [1,2,1,3,5,6,4]
// 输出：1 或 5 


var findPeakElement = function(nums) {
  // 先考虑首尾部
  if(!nums.length) return -1;
  if(nums.length === 1) return 0;

  const len = nums.length;
  if(nums[0] > nums[1]) return 0;
  if(nums[len-1]>nums[len-2]) return len-1
  // 不满足前面，则首尾一定是升序；

  let left = 0, right = len-1;
  while(left <= right) {
      const mid = Math.floor((right + left) / 2)
      if(nums[mid]>nums[mid-1]&&nums[mid]>nums[mid+1]) {
          return mid
      }else if(nums[mid]<= nums[mid-1]) {// 注意这里，证明mid-1到mid是一个降序，则前面一定有峰值
          right = mid
      }else if(nums[mid] <= nums[mid+1]) {
          left = mid
      }
  }
  return -1
};

