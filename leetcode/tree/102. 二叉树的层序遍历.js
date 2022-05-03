var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  loop(root, res, 0);
  return res;
};

function loop(node, stack, deep) {
  if (!node) return;
  if (!stack[deep]) {
    stack[deep] = [];
  }
  stack[deep].push(node.val);
  node.left && loop(node.left, stack, deep + 1);
  node.right && loop(node.right, stack, deep + 1);
}

// 循环迭代方法
var levelOrder = function (root) {
  if (!root) return [];
  let stack = [root];
  const res = [];
  while (stack.length) {
    const current = [];
    const nextStack = [];
    while (stack.length) {
      const node = stack.shift();
      current.push(node.val);
      node.left && nextStack.push(node.left);
      node.right && nextStack.push(node.right);
    }
    current.length && res.push(current);
    stack = nextStack;
  }
  return res;
};
