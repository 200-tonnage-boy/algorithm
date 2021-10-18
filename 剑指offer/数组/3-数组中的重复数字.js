// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 排序加遍历
var findRepeatNumber1 = function(nums) {
    nums.sort((a,b) => a-b)
    for(let i=0; i< nums.length -1; i++) {
      if(nums[i]===nums[i+1]){
        return nums[i]
      }
    }
    return null
};
// hash表
var findRepeatNumber1 = function(nums) {
  const map = new Map()
  for(let i=0; i<nums.length; i++) {
    if(map.has(nums[i])){
      return nums[i]
    } else {
      map.set(nums[i], i)
    }
  }
  return null
};

var findRepeatNumber1 = function(nums) {
  for(let i=0; i<nums.length; i++) {
    if(nums[i]===i) {
      continue
    } else if (nums[nums[i]] === i) {
      return nums[i]
    } else {
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
    }
  }
  
};
