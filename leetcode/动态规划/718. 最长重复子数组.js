var findLength = function(A, B) {
 //  dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]。 注意这里的索引差别，决定了从1开始，并且需要比长度+1
 // 也就是说选定A的i， B的j，他俩是否公共，要看他俩的前一个的是否公共...
  const m = A.length;
 const n = B.length;
 const dp = new Array(m + 1);// 注意是m+1
 for (let i = 0; i <= m; i++) { // 初始化整个dp矩阵，每个值为0
   dp[i] = new Array(n + 1).fill(0);
 }                                
 let res = 0;
 // i=0或j=0的base case，初始化时已经包括
 for (let i = 1; i <= m; i++) {    // 从1开始遍历
   for (let j = 1; j <= n; j++) {  // 从1开始遍历
     if (A[i - 1] == B[j - 1]) {     
       dp[i][j] = dp[i - 1][j - 1] + 1;
     }                       
     res = Math.max(dp[i][j], res);
   }
 }
 return res;
};