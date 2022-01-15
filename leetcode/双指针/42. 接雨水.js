// 双指针解法
//一根柱子能接的水，取决于其左右两边最高的柱子，注意，左右指针既负责算左右max，也是为了计算当前的接水的量，因此是while(left<right)而不是《=，因为相遇的前一个位置，两者相邻
// 此时所有的柱子都已经计算过了；
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let count = 0
  let [left, right] = [0, height.length-1];
  let [leftMax, rightMax] = [0, 0];
  while (left < right) {
      leftMax=Math.max(leftMax, height[left])
      rightMax = Math.max(rightMax, height[right])
      if(leftMax < rightMax) {
          count += leftMax-height[left++]
      }else {
          count += rightMax - height[right--]
      }
  }
  return count
};