// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


// 看到log n 使用二分；
// 即使旋转，每次也必然有一边是有序的，可以通过end>=start判断一侧是否有序，并通过有序的一侧，判断target是否在有序一侧的区间内；
// 注意边界条件
var search = function(nums, target) {
  if(!nums.length) return -1;
  let left = 0; right = nums.length - 1; 

  while(left <= right) {
      const mid = (right + left) >> 1;
      if(nums[mid] === target) {
          return mid
      }
      if(nums[mid] >= nums[left]) {// 左侧有序
          if(target >= nums[left] && target < nums[mid]) {// 防止直接mid到旋转点，必须要用这个判断条件
              right = mid - 1;
          }else {
               left = mid +1;
          }
      }else {// 右侧有序
          if(nums[mid] < target && target <= nums[right]) {
              left = mid + 1
          }else {
              right = mid -1
          }
      }
  }
  return -1
};