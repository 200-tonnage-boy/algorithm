// 递归 时间复杂度n
var preorderTraversal = function(root) {
  const res = [];
  getRes(root, res)
  return res
  
};

const getRes = (root, res) => {
  if(!root) return null
  res.push(root.val)
  getRes(root.left, res)
  getRes(root.right, res)
}

// 迭代
// 使用栈模拟递归调用  注意进出顺序
// 也可以使用队列，一样的
var preorderTraversal = function(root) {
  if(!root) return []
  const res = [];
  const stack = [root]
  while(stack.length) {
      const tem = stack.pop()
      res.push(tem.val);
      tem.right && stack.push(tem.right)// 注意这里是对递归的模拟，注意顺序，先进后出；
      tem.left && stack.push(tem.left);
  }
  return res
}