var postorderTraversal = function (root) {
  const stack = [root];
  const res = [];

  while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
          stack.push(node.left, node.right);
          res.unshift(node.val);
      }
  }
  return res;
};
