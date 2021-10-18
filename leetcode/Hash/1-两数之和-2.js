// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

var twoSum = function(nums, target) {
  const map = new Map()
  for (let i=0; i<nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target-nums[i])]
    }else {
      map.set(nums[i],i)
    }
  }
  return []
};
// [2,7,11,15]
// 9
console.log(twoSum([2,7,11,15]))


// 数组解法
var twoSum = function(nums, target) {
  for (let i=0; i<nums.length; i++) {
      for(let j=i+1; j<nums.length; j++) {
          if (nums[i]+nums[j] === target) return [i,j]
      }
  }
  return []
};

// hash解法
var twoSum = function(nums, target) {
  const map = new Map()
  for(let i=0;i<nums.length; i++) {
      const res = target - nums [i]
      if (map.has(res)) return [i,map.get(res)]
      map.set(nums[i],i)
  }
  return []
};