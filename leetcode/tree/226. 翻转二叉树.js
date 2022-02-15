// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

// 递归
// 分别翻转当前节点的左右子树，
// 然后再对换左右节点，完成当前节点的翻转
var invertTree = function(root) {
  if (!root) return null
  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.right = left
  root.left = right
  return root
};


//迭代
// 每次交换一个结点，如果当前结点的左右子树不为空，就放入队列等待处理；等队列为空的时候所有的树都处理完了
var invertTree = function(root) {
  if(!root) return null
  const queue = [root]
  while(queue.length) {
      let curr = queue.shift();
      [curr.left, curr.right] = [curr.right, curr.left]
      if(curr.left) {
          queue.push(curr.left)
      }
      if(curr.right) {
          queue.push(curr.right)
      }
  }
  return root
};