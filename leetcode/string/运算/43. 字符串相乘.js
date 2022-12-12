var multiply = function(num1, num2) {
  let s1 = num1.length - 1, s2 = num2.length - 1;
    let curry = 0;
    let res = [];
    for(s1; s1>=0; s1--) {
        for(s2; s2>=0; s2--) {
            const item1 = Number(num1[s1]) || 0;
            const item2 = Number(num2[s2]) || 0;
            const sum = item1 * item2 + curry;
            curry = sum >= 10 ? Math.floor(sum / 10) : 0;
            const str = sum.toString();
            str.length >1 ? res.unshift(str[1]) : res.unshift(str[0])
        }
    }
    if(curry) {
        res.unshift(curry)
    }
    return res.join('')
};
multiply("123", '456')
