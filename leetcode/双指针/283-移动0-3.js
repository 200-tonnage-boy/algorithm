// 描述：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 要求：
// 1.必须在原数组上操作，不能拷贝额外的数组。
// 2.尽量减少操作次数。

var moveZeroes = function(nums) {// 时间O(n) 空间O(1)
  let index = 0// 记录非0元素长度；
  for (let i=0; i<nums.length; i++) {
    if (nums[i]!==0) {
      const tem = nums[index]
      // [nums[index],nums[i]] = [nums[i], nums[index]] 这种也可
      nums[index]=nums[i]
      nums[i] = tem
      index++
    }
  }
  return nums
 };
 console.log(moveZeroes([0,1,0,3,12])) 
 // 第一遍