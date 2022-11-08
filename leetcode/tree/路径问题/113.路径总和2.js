// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。


// 对112的一个扩展，在用一个栈来保存路径
var pathSum = function(root, targetSum) {
  if(!root) {
      return []
  }
  const res = []
  const roadStack = [[root.val]]
  const sumStack = [root.val]
  const nodeStack = [root]
  while (nodeStack.length) {
      const road = roadStack.pop()
      const sum = sumStack.pop();
      const node = nodeStack.pop()
      if(!node.left&&!node.right&&sum === targetSum) {
          res.push([...road])
      }
      if(node.left) {
          nodeStack.push(node.left);
          sumStack.push(sum + node.left.val)
          roadStack.push([...road, node.left.val])
      }
       if(node.right) {
          nodeStack.push(node.right);
          sumStack.push(sum + node.right.val)
          roadStack.push([...road, node.right.val])
      }
  }
  return res

};


// 递归版本
var pathSum = function(root, targetSum) {
    if(!root) return [];
    const res = [];
    deepCheck(root,0, targetSum, [], res )
    return res
};

const deepCheck = (node, sum, targetSum, road, res) => {
    if(!node) return
    if(!node.left && !node.right && (sum+node.val===targetSum)) {
        let newRoad = [...road, node.val]
        res.push(newRoad)
        return 
    }
    if(node.left) {
        deepCheck(node.left, sum+node.val, targetSum, [...road, node.val], res)
    }
    if(node.right) {
        deepCheck(node.right, sum+node.val, targetSum, [...road, node.val], res)
    }
}