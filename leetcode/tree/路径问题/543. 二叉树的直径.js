// 深度优先遍历
var diameterOfBinaryTree = function(root) {
  let res = 0;
  function dfs (node) {
      if(!node) return 0;
      const left = dfs(node.left);
      const right = dfs(node.right);
      res = Math.max(res, left + right)
      return Math.max(left, right) + 1;
  }
  dfs(root)
  return res;
};