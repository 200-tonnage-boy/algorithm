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

/////////////////////
var preorderTraversal2 = function(root) {
  // 循环
  if(!root) return [];
  const res = []
  const stack = [root]
  while(stack.length) {
      const item = stack.shift()
      // 注意下面这种解法是不行的，这样类似队列，左右依次进队，但是前度遍历是深度优先，如果存在子树应该先看子树，
      // 类似下面这种，会出现处理完左子树，左子树的子节点会排在右子树后面；
      res.push(item.val)
      item.left && stack.push(item.left)
      item.right && stack.push(item.right)
  }
  return res
};

