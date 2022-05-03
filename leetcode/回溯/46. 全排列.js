// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 


// 注意是不包含重复数字的
var permute = function(nums) {
  const deep = (arr, length, used) => {
      if(path.length === length) {// 也就是到达最末尾的时候，可以考虑成一个树的样子
          res.push([...path])
      }
      for(let i=0; i<length; i++) {// 循环每一层的可能
          if(used[i]) continue
          used[i] = true
          path.push(arr[i])
          deep(arr, length, used)
          path.pop()// 这里pop就不用清空path，回溯的时候会自动处理path
          used[i] = false
      }
  }

  const len = nums.length;
  const path = []
  const res = []
  deep(nums, len, [])
  return res
};