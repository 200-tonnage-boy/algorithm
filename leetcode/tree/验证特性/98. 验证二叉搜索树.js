// 
// 相当于校验每一个节点在不在一个区间里，
// 
var isValidBST = function(root) {
  return dfsCheck(root, -Infinity, Infinity)
};

function dfsCheck (node, down, up) {
  if(!node) return true
  if(node.val >=up || node.val<=down) {
      return false
  }
  return dfsCheck(node.left, down, node.val) && dfsCheck(node.right, node.val, up)
}


// 方法二：中序遍历 左根右，每次判断是否大于上一个；

