
// d第一次： 暴力循环，复杂度N^2
var twoSum = function(nums, target) {
  for(let i = 0; i< nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      if(nums[i]+nums[j]===target) {
        return [i, j]
      }
    }
  }
};

// 第二次：哈希表复杂度N
// 时间换空间，需要额外存储空间
var twoSum2= function(nums, target) {
  const map = new Map()

  for(let i = 0; i< nums.length; i++) {
    if(map.has(target-nums[i])) {
      return [i, map.get(target-nums[i])]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};