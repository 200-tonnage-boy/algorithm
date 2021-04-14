//给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 已经升序排序

//第一次： 时间复杂度O(n),空间复杂度O(1)
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i+1]) {
      nums.splice(i+1, 1)
      i--
    }
  }
  return nums.length
};

// 第二次： 双指针法；时间复杂度O(n),空间复杂度O(1)
// 两个指针，第一个从0开始，第二个从1开始；
//1. 若是不相等，将前指针+1(从左开始挨个替换为不相同的)，并将后指针的值拷贝道+1后的前指针位置；
//2. 若是相等，则后指针向后移，前指针不动；
//3. 最后将头指针+1就是长度；
//核心思路：将不相等的值全部移动道左面；

// 优化： 由于是有序数组，因此相同的值只可能是存在相邻位置，因此在执行复制操作的时候可以进行判断，如果是相邻的直接移动指针就可以，没必要进行拷贝操作；
var removeDuplicates2 = function (nums) {
  let i=0;
  for (let j=1; j<nums.length; j++) {
    if(nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]// 这里可以加入条件判断，相邻的就没必要进行复制；
    }
  }
  console.log(nums,i)
  nums.splice(i+1, i+2)
  console.log(nums,i+1)
  return i+1
};
removeDuplicates2([1,1,2])
