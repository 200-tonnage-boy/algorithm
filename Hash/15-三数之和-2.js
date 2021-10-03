// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 解法一：排序+循环+双指针 时间复杂度O（N2）
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[j] + nums[k] + nums[i];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
      if (sum < 0) {
        j++;
      }
      if (sum > 0) {
        k--;
      }
    }
  }
  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 排序  去重
var threeSum2 = function (nums) {
  // 排序
  // 去重
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]){
      continue
    };
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push(nums[i], nums[j], nums[k]);
        while (j < k && nums[j] === nums[j + 1]) j++;// 过滤掉重复 三元组
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
      if(sum<0) j++;
      if(sum>0) k--;
    }
  }
  console.log(res)
  return res
};
threeSum2([-1,0,1,2,-1,-4])



// hash解法，此题使用hash也较为麻烦,可以利用JS set的特性 , 先拼接有序字符串做值，然后再split
var threeSum = function(nums) {
  if(nums.length<3) return []
  const hashMap = new Set();
  nums.sort((a,b) => a-b)
  for(let i=0;i<nums.length-2;i++) {
    if(nums[i] >0) break;
    let j=i+1, k=nums.length-1
    while(j<k) {
      const sum = nums[i]+nums[j]+nums[k];
      if(sum===0) {
        hashMap.add(`${nums[i]},${nums[j]},${nums[k]}`)
        k--
        j++
      }
      if(sum>0) k--
      if(sum<0) j++
    }
  }
  return  Array.from(hashMap).map(i => i.split(","));
};


