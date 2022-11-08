// 深度遍历，递归
var binaryTreePaths = function(root) {
  if(!root) return []
  
  const res = []
  loop(root, '', res)
  
  return res;
};

function loop (node, pre, res) {
  if(!node) return pre
  let current = pre  +node.val.toString();
  if(!node.left && !node.right) {
      res.push(current)
      return
  }
  current += '->' 
  if(node.left) {
      loop(node.left, current, res)
  }
  if(node.right) {
      loop(node.right, current, res)
  }
}


// 广度 循环迭代
var binaryTreePaths = function(root) {
  if(!root) return []
      const stack = [root]
      const roadStack = [root.val.toString()]
      const res = []
      while(stack.length) {
          const node = stack.shift();
          const road = roadStack.shift();
          if(!node.left && !node.right) {
              res.push(road)
          }
          if(node.left) {
              const newRoad = `${road}->${node.left.val}`
              roadStack.push(newRoad.toString())
              stack.push(node.left)
          }
          if(node.right) {
               const newRoad = `${road}->${node.right.val}`
              roadStack.push(newRoad.toString())
              stack.push(node.right)
          }
      }
      return res;
  };