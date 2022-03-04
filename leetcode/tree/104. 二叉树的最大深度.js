// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 3
// / \
// 9  20
//  /  \
// 15   7


// 解法1： DFS 深度优先搜索，递归
// 时间N，空间height，递归空间
var maxDepth = function(root) {
  if (!root) return 0

  const leftMax = maxDepth(root.left)
  const rightMax = maxDepth(root.right)
  return Math.max(leftMax, rightMax) + 1
};


// 广度优先搜索变式
// 时间N，空间最坏也是N，即都在下一层
var maxDepth = function(root) {
  if (!root) return 0
  const stack = [root]
  let ans = 0
 while(stack.length) {
     const length = stack.length// 注意这里，每次都得把单次的长度取完，即一次只处理一层；
     for(let i=0; i<length; i++) {
         const tem = stack.shift()
         tem.right && stack.push(tem.right)
         tem.left && stack.push(tem.left)
     }
     ans += 1
 }
 return ans
};