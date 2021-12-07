var levelOrder = function(root) {
  if(!root) return []
  const res = []
  loop(root, res, 0)
  return res
};

function loop (node, stack, deep) {
  if(!node) return
  if(!stack[deep]) {
      stack[deep] = []
  }
  stack[deep].push(node.val)
  node.left && loop(node.left, stack, deep+1);
  node.right && loop(node.right, stack, deep+1)
}