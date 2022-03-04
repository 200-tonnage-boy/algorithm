// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。


var findMaxAverage = function(nums, k) {
  if(nums.length<k) return null;
  let maxV=0;
  let temSum = 0;
  for(let i=0; i<k; i++) {// 先建立一个大小为K的庄口
      temSum += nums[i]
  }
  maxV=temSum
  for(let i=k; i<nums.length; i++) {
      const inVar = nums[i]
      const outVar = nums[i-k]
      temSum = temSum+inVar-outVar// 计算进出的值
      maxV = Math.max(temSum, maxV)
  }
  return maxV  /k

};