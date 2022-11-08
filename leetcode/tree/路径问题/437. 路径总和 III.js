// 双递归
// 算每个节点是否满足条件
// 1重递归，target不变，控制起始路径
// 2重递归，targer 逐层递减，在1层控制起始的前提下控制结束路径
var pathSum = function(root, targetSum) {
  if(!root) return 0;
  // 注意这里，第一层递归控制起点，dfs用于查找以当前节点为开始满足条件的路径条数；
  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

function dfs (node, targetSum) {
  if(!node) return 0;
  let count = 0;
  if(node.val === targetSum) {
      count++
  }
  count += dfs(node.left, targetSum - node.val)
  count += dfs(node.right, targetSum - node.val)
  return count
}






// 前缀和
// 每个节点的前缀和为当前节点（不算当前节点的值） ---> root的路径值；
// 找到taget 就 转换为了  找到路径上是否存在  当前前缀和 - 某一结点前缀和 = target，代表两个节点之间距离满足；
// 注意采用深度遍历，前序遍历，还有一个问题，两个节点必须是父子关系，由于前缀和记录在一个map里，所以在递归时，当子节点遍历完之后，要删除当前节点的记录；
// 防止不具有父子关系的其他节点利用到该节点；


var pathSum = function(root, targetSum) {
  if(!root) return 0;
  const map = new Map();
  map.set(0, 1);
  // 注意，这里是考虑root === targetSum的情况，如果不加这个0，1；findRoad 中就找不到0-targetSum的记录
  const num = findRoad(root, map, 0,targetSum)
  return num
};

function findRoad (node, map, pre, targetSum) {
  if(!node) return 0;
  const current = pre + node.val;
  let res = map.get(current - targetSum) || 0;// 满足条件
  // 把当前节点塞进去
  map.set(current, (map.get(current) || 0) + 1)
  //递归左右子树
  res += findRoad(node.left, map, current, targetSum)
  res += findRoad(node.right, map, current, targetSum)
  // 把当前节点弹出
  map.set(current, (map.get(current) || 0) - 1)

  return res
}

