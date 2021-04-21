//题目秒速：
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。




// 二分查找 复杂度O（lgn）
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while(left <= right) {
    mid = (left + right) >> 2;
    if (nums[mid] === target) {
      return mid
    }
    if(nums[mid] > target) {
      right = mid -1
    }
    if(nums[mid] < target) {
      left = mid + 1
    }
  }
  return left// 注意这里的
};
// [1,3,5,6], 7

console.log(searchInsert([1,3,5,6], 7))
