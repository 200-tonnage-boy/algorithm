/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
   // 暴力解法超时，双层循环K*N的时间复杂度
};
// maxSlidingWindow([1,-1], 1)




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow2 = function(nums, k) {
  const indexQueue = []
  const res = []
  for (let i=0; i<k; i++) {
    while(indexQueue.length && nums[i]>=nums[indexQueue[indexQueue.length-1]]) {
      indexQueue.pop()
    }
    indexQueue.push(i)
  }
  res.push(nums[indexQueue[0]])
  for (let j=k; j<nums.length; j++) {
    while(indexQueue.length && nums[j]>=nums[indexQueue[indexQueue.length-1]]) {
      indexQueue.pop()
    }
    indexQueue.push(j)
    while(indexQueue[0]<=j-k) {
      indexQueue.shift()
    }
    res.push(nums[indexQueue[0]])
  }
  console.log(res)
  return res
};
maxSlidingWindow2([1,3,-1,-3,5,3,6,7],3)