// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  //【根坐右】
  // 【左根右】
  // 获取根，然后截取左右，递归
  if(!preorder.length) return []
  if(preorder.length === 1) return preorder[0]
  let root = preorder[0]
  let inRootIndex = inorder.indexOf(root)
  const inLeft = inorder.slice(0, inRootIndex);
  const inRight = inorder.slice(inRootIndex+1);
  const preLeft = preorder.slice(1, inRootIndex+1)
  const preRight = preorder.slice(inRootIndex+1)
  const node = new TreeNode(root)
  node.left = buildTree(preLeft, inLeft);
  node.right = buildTree(preRight, inRight);
  return node
};