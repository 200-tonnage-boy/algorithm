// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 后序遍历？
var lowestCommonAncestor = function(root, p, q) {
  let res;
  const dfs = (root) => {
      if(!root) return false
      const L = dfs(root.left)
      const R = dfs(root.right);
      if(L&&R || ((root.val === q.val || root.val === p.val)&&(L || R))) {
          if(!res) {
              res = root
          }
      }
      return L || R || (root.val === p.val || root.val === q.val)
  }
  dfs(root)
  return res
};