// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 

// 第一种
var maxArea = function(height) {// 时间O(n) 空间O(1)
  let max = 0;
  for (let i=0;i<height.length-1; i++) {
    for (let j=i+1; j<height.length; j++) {
      let total = (j-i)*Math.min(height[i],height[j])
      if (total>max) {
        max = total
      }
    }
  }
  return max
};

console.log(maxArea([1,2,1]))

var maxArea2 = function(height) {// 时间O(n) 空间O(1)
  let max = 0;
  for (let i=0,j=height.length-1; i<j;) {
    const min = height[i] > height[j] ? height[j--] : height[i++]
    const total = (j-i+1)*min // 因为上面一步已经移动了下下标，此处要+1
    max = Math.max(total,max)
  }
  return max
};