var generate = function(numRows) {
  const res = new Array(numRows).fill();
  return res.map((item, index, arr) => {
    return arr[index] = new Array(index+1).fill(1).map((i, j) => {
      if (j > 0 && j < index) {
        return arr[index - 1][j - 1] + arr[index - 1][j];
      } else {
        return i;
      }
    });
  });
};