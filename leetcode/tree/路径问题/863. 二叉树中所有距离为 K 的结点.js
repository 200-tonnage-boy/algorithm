// 深度优先遍历 + hash表

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
  if(!node) return []
  const map = new Map()//值唯一；记录值的父节点
  const res = []
  getRecord(node, map)// 记录每个节点的父节点，key为左右子节点的val，值为node
  findNode(target, target, k, res, map)// 以target为起点开始遍历；
  return res
};
function findNode (node, k, res, map, from) {
  if(!node) return
  if(k===0){
      res.push(node.val)
      return
  }
  if(node.left !== from) {// 注意节点是可以顺着自己的父节点遍历的，注意防止重复
      findNode(node.left, k-1, res, map,node)
  }
  if(node.right !== from) {
      findNode(node.right, k-1, res, map,node)
  }
  if(map.get(node.val) !== from) {
      findNode(map.get(node.val), k-1, res, map,node)
  }
}
function getRecord (node, map) {
      if(!node) return
      if(node.left) {
          map.set(node.left.val, node)
          getRecord(node.left, map)
      }
      if(node.right) {
          map.set(node.right.val, node)
          getRecord(node.right, map)
      }

}