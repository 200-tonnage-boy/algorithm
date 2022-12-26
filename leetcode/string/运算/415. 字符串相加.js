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



var addStrings = function(num1, num2) {
  if(!num1.length || !num2.length) return num1 + num2
  let length1 = num1.length-1;
  let length2 = num2.length-1;
  let curry = 0;
  let res = '';
  while(length1>=0 || length2>=0) {
      let number1 = Number(num1[length1]) || 0;
      let number2 = Number(num2[length2]) || 0;
      let sum = number1 + number2 + curry;
      curry = sum >= 10 ? 1 : 0;
      sum = sum >= 10 ? sum - 10 : sum;
      res =  sum.toString() + res;
      length1--;
      length2--;
  }
  if(curry) {
      res = '1' + res
  }
  return res
};
addStrings22("1", "9")
