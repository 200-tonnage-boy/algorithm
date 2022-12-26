// 联系对比 26题
var removeDuplicates = function(nums) {
  if(nums.length <= 2) return nums.length
  let slow = 2, quick = 2;
  while(quick < nums.length) {
      if(nums[quick] !== nums[slow-2]) {
          nums[slow] = nums[quick]
          slow++
      }
      quick++
  }
  return slow
};