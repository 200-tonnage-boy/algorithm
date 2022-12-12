// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 层序遍历reverse一下；
var levelOrderBottom = function(root) {
  if(!root) return []
const res = []
loop(root, res, 0)
return res.reverse()
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