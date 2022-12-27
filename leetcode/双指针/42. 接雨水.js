// 解法1：暴力解法，对每一个柱子，其能增加的为左右的最大值的最小的一个与当前的差值
// 循环，然后对i左右求最大值，时间复杂度O(n^2)
var trap1 = function(height) {
    if(height.length <=2) return 0
    let res = 0;
    for(let i=1; i<height.length-1; i++) {
        const leftMax = getMax(0, i-1)
        const rightMax = getMax(i+1, height.length-1)
        if(Math.min(leftMax, rightMax) > height[i]) {
            res += Math.min(leftMax, rightMax) - height[i]
        }
    }
    function getMax (lIndex, rIndex) {
        let current = lIndex, max = 0;
        while(current<=rIndex) {
            max = Math.max(max, height[current])
            current++
        }
        return max
    }
    return res
};
// 时间复杂度O(n),空间O(0);
// 先利用动态规划把左右最大值的数组先建好；
function trap2 (height) {
    if(height.length <=2) return 0
    let res = 0;
    const leftMax = [0]
    for(let i=1; i<height.length; i++) {
        leftMax[i] = Math.max(height[i-1], leftMax[i-1])
    }
    const rightMax = []
    rightMax[height.length-1] = 0
    for(let i=height.length-2; i>=0; i--) {
        rightMax[i] = Math.max(height[i+1], rightMax[i+1])
    }

    for(let i=0; i<height.length; i++) {
        const leftMaxForItem = leftMax[i]
        const rightMaxForItem = rightMax[i]
        if(Math.min(leftMaxForItem, rightMaxForItem) > height[i]) {
            res += Math.min(leftMaxForItem, rightMaxForItem) - height[i]
        }
    }
    return res
}

//O(n) / O(1) 双指针，优化动态规划创建数组的过程，使用双指针动态更新左右最大值，节省空间
function trap3(height) {
    if(height.length <=2) return 0
    let res = 0;
    let left = 0, right=height.length-1;
    let leftMax = 0, rightMax=0;
    while(left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if(leftMax < rightMax) {
           left++;
           if(height[left] < leftMax) {
            res += leftMax - height[left]
           }
        } else {
            right--
            if(rightMax - height[right] > 0) {
                res += rightMax - height[right]
            }
        }
    } 
    return res;
}
console.log(trap3([0,1,0,2,1,0,1,3,2,1,2,1]))// 6






// 双指针解法
//一根柱子能接的水，取决于其左右两边最高的柱子，注意，左右指针既负责算左右max，也是为了计算当前的接水的量，
// 因此是while(left<right)而不是《=，因为相遇的前一个位置，两者相邻
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