var search = function(nums, target) {
  if (nums.length < 1) return -1;
  if(target > nums[nums.length-1] || target < nums[0]) return -1
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      // const mid = parseInt((left+right)/2);

       const mid = Math.floor((right - left) / 2) + left;
      if(nums[mid] === target) {
          return mid
      } else if (nums < target) {
          left = mid + 1
      } else if (nums > target) {
          right = mid - 1;
      }
  }
  return -1
};
search([-1,0,3,5,9,12], 9)