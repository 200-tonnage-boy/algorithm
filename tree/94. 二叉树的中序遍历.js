// 递归
var inorderTraversal = function(root) {
  if(!root) return []
  // 中序 左根右
  const res = []
  getRes(root.left, res);
  res.push(root.val);
  getRes(root.right, res);
  return res
};

const getRes = (root, res) => {
  if(!root) return
   getRes(root.left, res);
  res.push(root.val);
  getRes(root.right, res);
}

// 迭代
// 中序 左根右
var inorderTraversal = function(root) {
  // 把左侧所有子树依次进栈
  // 弹出，处理最下一个左子树
  // 每次处理，相当于当前节点，看一下有没有右子节点；
  const res = [];
  const stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)// 先进后出
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};