// 与257一样，再加一个返回值处理

var sumNumbers = function(root) {
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
           const newRoad = `${road}${node.left.val}`
           roadStack.push(newRoad.toString())
           stack.push(node.left)
       }
       if(node.right) {
            const newRoad = `${road}${node.right.val}`
           roadStack.push(newRoad.toString())
           stack.push(node.right)
       }
   }
   return res.reduce((pre, curr) => {
       return pre + Number(curr)
   }, 0);
};