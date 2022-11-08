// 闭包+104题
var isBalanced = function (root) {
  if (!root) return true;
  let tag = true;
  var maxDepth = function (root) {
    if (!root) return 0;

    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    if (leftMax - rightMax > 1 || rightMax - leftMax > 1) {
      tag = false;
    }
    return Math.max(leftMax, rightMax) + 1;
  };
  maxDepth(root);
  return tag;
};
