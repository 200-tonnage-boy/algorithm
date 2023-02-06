// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

// 第一种解法：滚动数组
//注：其实该题就是斐波那契数列， fn = fn-1 + fn-2 因为每次爬楼梯都只能**一步或者两步**，因此n就等于从n-1跨上来或者n-2跨上来；
// 
var climbStairs = function(n) {// 时间复杂度O(n),空间复杂度O(1)
  // a b c => b=a c=b b+c   三个变量循环滚动 a=b+c
  // 初始条件 0 0 1
  let a=0,b=0,c=1
  for (let i=1; i<=n; i++) {
    a=b,
    b=c,
    c=a+b
  }
  return c
};

// 解法二： 递归
const climbStairs1=(n) => { // 时间复杂度：  ？？？O(logn)
  if (n===1) return 1
  if (n===2) return 2
  return climbStairs1(n-1) + climbStairs1(n-2)
}

// console.log(climbStairs1(1))
// console.log(climbStairs1(2))
// console.log(climbStairs1(3))
// console.log(climbStairs1(4))
// console.log(climbStairs1(5))
console.log(climbStairs1(45))

