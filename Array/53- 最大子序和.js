var maxSubArray = function(nums) {
  if(!nums.length){
      return
  }
  if(nums.length===1){
      return nums[0]
  }
  let pre = 0;
  let res = nums[0];
  nums.forEach((item) => {
      pre = Math.max(item, pre+item)
      res = Math.max(pre, res)
  })
  return res
};