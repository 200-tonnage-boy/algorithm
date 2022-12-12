// 宽度优先
var widthOfBinaryTree = function(root) {
  if(!root) return 0
  const stack = [root]
  const indexStack = [1n]
  let res = 1n;
  while(stack.length) {
      const newStack = [];
      const newIndex = [];
      while(stack.length) {
          const node = stack.shift();
          const index = indexStack.shift();
         
              if(node.left) {
                  newStack.push(node.left)
                  newIndex.push(2n*index)
              }
              if(node.right) {
                  newStack.push(node.right)
                  newIndex.push(2n*index + 1n)
              }
          
      }
      let lenght = newIndex.length - 1
      if(lenght > 0) {
          let x = newIndex[lenght] - newIndex[0]
          console.log('xx',newIndex, newStack)
          let width = x + 1n;
          if(width > res) {
              res = width
          }
      }
     
      stack.push(...newStack)
      indexStack.push(...newIndex)
  }
  return res
};