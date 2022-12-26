// 注意是有序数组，因此重复的元素只能是相邻出现；
// 双指针，快指针往前跑，遇到不相等等，就换到slow的下一个位置；slow+1;


var removeDuplicates = function(nums) {
  if(nums.length<=1) return nums.length
  let slow = 0, quick = 1;
  while(quick<=nums.length-1) {
      if(nums[quick] !== nums[slow]) {
          if(quick-slow>1) {// 优化，[1,2,3,4,5],如果没有重复元素，不在换位操作；
              nums[slow+1] = nums[quick]
          }
          slow++
      }
       quick++
  }
  return slow+1;
  };