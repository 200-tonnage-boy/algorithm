var findNumberIn2DArray = function(matrix, target) {
  if(!matrix || !matrix[0]) return false
  let row = 0;
  let column = matrix[0].length-1;
  while(row<matrix.length&&column>=0) {
      const point = matrix[row][column];
      if(point > target) {
          column--
      }
      if(point < target) {
          row++
      }
      if (point === target) return true
  }
  return false
};

var findNumberIn2DArray = function(matrix, target) {
  const arr = []
  matrix.forEach(item => arr.push(...item))
  return arr.find(item => item === target) || false
};
const t = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(t, 20))