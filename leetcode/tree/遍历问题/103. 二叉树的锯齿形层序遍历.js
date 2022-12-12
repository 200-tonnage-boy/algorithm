// 与层序遍历一样，加一个标志位就可以
// 循环迭代
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  const stack = [root];
  const res = [];
  let tag = true
  while(stack.length) {
      const newStack = [];
      const values = [];
      while(stack.length) {
          const node = stack.shift();
          values.push(node.val);
          node.left && newStack.push(node.left);
          node.right && newStack.push(node.right);
      }
      stack.push(...newStack);
      res.push(!tag ? values.reverse() : values)
      tag = !tag
  }
  return res
};



// 递归
function loop (node, values, deep, tag) {
  if(!node) return;
  if(!values[deep]) {
      values[deep] = []
  }
  if(tag) {
      values[deep].unshift(node.val)
  }else {
  values[deep].push(node.val)

  }

  node.left && loop(node.left, values, deep + 1, !tag);
  node.right && loop(node.right, values, deep + 1, !tag);
}
/**
* @param {TreeNode} root
* @return {number[][]}
*/
var zigzagLevelOrder = function(root) {
  if(!root) return []
  const res = [];
  loop(root, res, 0, false)
  return res
};