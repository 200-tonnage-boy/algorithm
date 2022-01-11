// 双指针分别遍历对比，放入另一数组
 var merge = function(nums1, m, nums2, n) {
  const sort = [];
  let pm = 0;
  let pn = 0;
  let key = 0;
  while(pm<m || pn <n) {
      if(pm===m) {
          sort[key] = nums2[pn++]
      }else if (pn === n) {
          sort[key] = nums1[pm++]
      }else if (nums1[pm] < nums2[pn]) {
          sort[key] = nums1[pm++]
      }else {
          sort[key] = nums2[pn++]
      }
  key++
  }
  for(let i=0; i<m+n; i++) {
      nums1[i] = sort[i]
  }
  
};


// 解法二：同样是双指针，不过因为1数组已经预留了2的位置，因此可以直接将排序好的放入到1数组中
// 注意为了防止覆盖，从后往前，也就是从大到小遍历；

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let pm = m-1;
  let pn = n - 1;
  let key = n + m -1;
  while(key >= 0) {
    if(pm < 0) {
      nums1[key] = nums2[pn--]
    }else if(pn < 0) {
      nums1[key] = nums1[pm--]
    }else if (nums1[pm] > nums2[pn]) {
      nums1[key] = nums1[pm--]
    }else {
      nums1[key] = nums2[pn--]
    }
    key--
  }
};
merge([1,2,3,0,0,0], 3, [2,5,6], 3)