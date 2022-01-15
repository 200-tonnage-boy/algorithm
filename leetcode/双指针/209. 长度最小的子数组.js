
 // 双指针滑动窗口，够大就缩减左边，不够大就增加右边，注意不能排序，子数组，不是元素，保持顺序，
 // 加了右边够大，只能通过缩左边检测是否还够；
 var minSubArrayLen = function(target, nums) {
  let res = Infinity;
  let left = 0, right = 0, sum = nums[0];
  while(right < nums.length) {
      if(sum >= target) {
          res = Math.min(res, right-left+1)
          if(res === 1) return res;
          sum -= nums[left++]
      }else {
          sum += nums[++right]// 注意这里先++
      }
  }
   return res === Infinity ? 0 : res
};

minSubArrayLen(7, [2,3,1,2,4,3])

