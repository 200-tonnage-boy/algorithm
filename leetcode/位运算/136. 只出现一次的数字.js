// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 运用异或运算， 主要是运用：异或自己为0！而变量异或0为自己！ 且满足交换律
var singleNumber = function(nums) {
  let res = 0;
  nums.forEach(item => res = res ^ item)
  return res
};
