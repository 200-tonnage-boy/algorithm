var addStrings = function(num1, num2) {
  // 双指针， 注意如果长度不一样前面要补0；
  let top = num1.length - 1;
  let bottom = num2.length - 1;
  const res = []
  let carry = 0;
  while (top>=0 || bottom >=0 || carry !== 0) {
      let topValue = top >=0? Number(num1[top]) : 0;
      let bottomValue = bottom >=0 ? Number(num2[bottom]): 0;
      let sum = topValue + bottomValue + carry
      res.unshift(sum % 10)
      carry = sum >= 10 ? 1 : 0;
      top--;
      bottom--;
  }
  return res.join('')
};