// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

 

// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4
// 示例 4:

// 输入: nums = [1,3,5,6], target = 0
// 输出: 0
// 示例 5:

// 输入: nums = [1], target = 0
// 输出: 0

var searchInsert = function(nums, target) {
  if(!nums.length) return 0
    let left = 0, right = nums.length -1;
    let tarIndex = -1;
    let mid;
    while(left <= right) {
      mid = Math.floor((left + right) / 2) // 注意二分法mid的取法；
      if (nums[mid] === target) {
        tarIndex = mid
        return mid
      }else if (nums[mid] < target) {
        left = mid + 1;
      }else {
        right = mid - 1;
      }
    }
    return left// 注意这里为什么返回left
    // ■ 最后一次left和right会汇聚到一个元素；
    // ■ 如果mid比目标值大，此时left不变，就是该插入的位置（因为前一个数会小），剩下的数往后推；
    // ■ 如果mid比目标元素小，此时left++，更大的数应该插入到下一个位置
  };

