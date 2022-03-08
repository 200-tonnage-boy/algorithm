
// https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
var lengthOfLIS = function (nums) {
  // dp[i]含义：从0到下标为i的序列的最长子序列长度,初始为1，也就是只有当前元素满足
  const dp = new Array(nums.length).fill(1);// 
  for (let i = 0; i < nums.length; i++) {
    // i与i前面的元素比较  
    for (let j = 0; j < i; j++) {
      // 找比i小的元素，找到一个，就让当前序列的最长子序列长度加1
      if (nums[i] > nums[j]) {// 也就是说，nums[i] > nums[j]； 那么证明J的序列+上i位置也行，那就
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // 找出最大的子序列
  return Math.max(...dp);
};
