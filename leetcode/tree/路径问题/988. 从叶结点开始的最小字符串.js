// 层序遍历 + 字符串操作
// 注意层序遍历的层数对应；
var smallestFromLeaf = function(root) {
  const stack = [root]
  const stringStack = [getVal(root.val)]
  const sss = []
  while(stack.length) {
      const newStack = [];
      const newString = [];
      while(stack.length) {
          const node = stack.shift();
          const s = stringStack.shift();
          if(!node.left && !node.right) {
              sss.push(s.split('').reverse().join(''))
          }
          if(node.left) {
              newStack.push(node.left)
              newString.push(s+getVal(node.left.val))
          }
          if(node.right) {
              newStack.push(node.right)
              newString.push(s+getVal(node.right.val))
          }
      }
      
      stack.push(...newStack)
      stringStack.push(...newString)
  }
  sss.sort((a, b) => a.localeCompare(b))
  console.log(sss)
  return sss[0]
};
function getVal(val) {
  return String.fromCharCode(val+'a'.charCodeAt(0))
}