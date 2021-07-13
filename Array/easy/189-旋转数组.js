var rotate = function(nums, k) {
  
};
// 解法1： 翻转数组，先整体翻转，再以K分割各自翻转 时间复杂度O(2n)=O(n) 空间复杂度：O(1)

const reverse = (arr, start, end) => {
  while(start<end) {
    [arr[start++],arr[end--]] = [arr[end],arr[start]]
  }
}
const rotate1 = (nums, k) =>{
  k %= nums.length
  reverse(nums,0,nums.length-1)
  reverse(nums,0,k-1)
  reverse(nums,k,nums.length-1)
}