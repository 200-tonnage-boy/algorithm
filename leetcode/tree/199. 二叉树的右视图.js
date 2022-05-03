// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 其实就是二叉树的层序遍历，只不过每次存储一层之后取出最右侧节点的值放入返回值数组中；


var rightSideView = function(root) {
  if(!root) return []
  const res = [];
  const stack = [root]
  while(stack.length) {
      const resItem = stack[stack.length-1]
      res.push(resItem.val)
      const treeLevel = [...stack]
      stack.length=0
      treeLevel.forEach(item => {
        
          if (item.left) {
              stack.push(item.left)
          }
            if(item.right) {
              stack.push(item.right)
          }
      })
  }
  return res
};