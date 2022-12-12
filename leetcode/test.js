var threeSum = function(nums) {
  if(nums.length <3) return []
  nums.sort((a, b) => a - b)
  const res = []
  for(let i=0; i<nums.length-2; i++) {
      if(nums[i] > 0) return res
      if(i>0 && nums[i]===nums[i-1]) continue
      let j=i+1; k=nums.length-1
      while(j<k) {
          const sum = nums[i] + nums[j] + nums[k]
          if(sum === 0) {
              res.push([nums[i],nums[j],nums[k]])
              while(j<k&&nums[j]===nums[j+1])j++;
              while(j<k&&nums[k]===nums[k-1])k--;
              j++;
              k--;
          }else if(nums > 0) {
              k--
          }else {
              j++
          }
      }
  }
  return res
};

threeSum([3,0,-2,-1,1,2])