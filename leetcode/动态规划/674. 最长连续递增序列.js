//300. 最长递增子序列 的简化版本，因为是连续的，循环的时候只需要看前一个更新dp数组就可以；
var findLengthOfLCIS = function(nums) {
  const dp = new Array(nums.length).fill(1);// 
  for (let i = 0; i < nums.length; i++) {
      if (i>=1 && (nums[i] > nums[i-1])) {// 也就是说，nums[i] > nums[j]； 那么证明J的序列+上i位置也行，那就
        dp[i] = Math.max(dp[i], dp[i-1] + 1);
      }
  }
  // 找出最大的子序列
  return Math.max(...dp);
};