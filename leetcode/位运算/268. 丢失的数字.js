// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

// 解法1： 排序+对比下标
// 时间复杂度：O(nlog n)O(nlogn)，其中 nn 是数组 nums 的长度。排序的时间复杂度是 O(nlog n)O(nlogn)，遍历数组寻找丢失的数字的时间复杂度是 O(n)O(n)，因此总时间复杂度是 O(nlog n)O(nlogn)。

// 空间复杂度：O(log n)O(logn)，其中 nn 是数组 nums 的长度。空间复杂度主要取决于排序的递归调用栈空间。

var missingNumber = function(nums) {
  nums.sort((a, b) => a-b)
  for (let i=0; i<nums.length; i++) {
      if(nums[i]!== i) return i
  }
  return nums.length
};


//解法2， hash表， 两次循环，添加，然后在循环0-n 查找；
// 时间空间都是O(n)


//位运算， 异或数组，然后异或0-n
// 时间O(n), 空间1；

var missingNumber = function(nums) {
  let res = 0;
  nums.forEach(item => res = item ^ res);
  for(let i=0; i<= nums.length; i++) {
      res = res ^ i
  }
  return res
};