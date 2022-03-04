//  广度优先搜索： 循环，用双队列，一个队列放值，一个放节点
var hasPathSum = function(root, targetSum) {
  if(!root) {
      return false
  }
  const nodeQueue = [root];
  const valueQueue = [root.val]
  while(nodeQueue.length) {
      const node = nodeQueue.pop()
      const totalValue = valueQueue.pop()// 相当于到该节点的路径值
      if(!node.left&&!node.right&&totalValue===targetSum) return true
      if(node.right) {// 分别计算到左右两个子节点的路径值
          nodeQueue.push(node.right)
          valueQueue.push(totalValue+node.right.val)
      }
      if(node.left) {
          nodeQueue.push(node.left)
          valueQueue.push(totalValue+node.left.val)
      }
  }   
  return false 
};