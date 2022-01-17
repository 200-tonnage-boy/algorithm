// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？


// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 二分查找，然后再往两边扩散；
var searchRange = function(nums, target) {
  if(!nums.length) return [-1, -1]
   let left = 0, right = nums.length -1;
   let tarIndex = -1;
   while(left <= right) {
     const mid = Math.floor((left + right) / 2) 
     if (nums[mid] === target) {
       tarIndex = mid
       break
     }else if (nums[mid] < target) {
       left = mid + 1;
     }else {
       right = mid - 1;
     }
   }
   if (tarIndex !== -1) {
     left = tarIndex;
     right = tarIndex;
     while(nums[left] === target) left--
     while(nums[right] === target) right ++
     return [++left, --right]
   }else {
     return [-1, -1]
   }
 };
