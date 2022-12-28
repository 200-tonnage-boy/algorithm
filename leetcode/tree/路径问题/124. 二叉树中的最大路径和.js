// 递归思想，dfs返回值为以当前为根节点，往下连接，所能贡献的最大值；
var maxPathSum = function(root) {
  if(!root) return 0;
  let res = -Infinity;
  function dfs (node) {
      if(!node) return 0;
      // 返回当前节点能贡献的最大值；
      const leftMax = dfs(node.left)
      const rightMax = dfs(node.right)
      const max = node.val + leftMax + rightMax;
      res = Math.max(max, res)
      const currentMax = node.val + Math.max(0, leftMax, rightMax)
      return currentMax < 0 ? 0 : currentMax
  }
  dfs(root)
  return res
};