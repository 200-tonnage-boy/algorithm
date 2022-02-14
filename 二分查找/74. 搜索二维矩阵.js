// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。


// 解法1： 根据规律，从左下角开始遍历矩阵，当前值>tartget,那么应该上移，<target应该右移；
var searchMatrix = function(matrix, target) {
  if(!matrix.length) return false
  let x = 0, y = matrix.length-1;
  while(y>=0&&x<matrix[y].length) {
      const curr = matrix[y][x];
      if(curr === target) return true
      if(curr>target) {
          y--
      }else {
          x++
      }
  }
  return false
};