var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'
    const len1 = num1.length, len2 = num2.length;
    const res = new Array(len1 + len2).fill(0);
    for(let i=len1-1; i>=0; i--) {
        for(let j=len2-1; j>=0; j--) {
            const item = Number(num1[i]);
            const item2 = Number(num2[j]);
            const curryIndex = i + j;
            const sumIndex = i + j + 1;
            const sum = item * item2 + res[sumIndex];
            const curry =  Math.floor(sum / 10);
            const sumRes = sum % 10;
            res[curryIndex] += curry;
            res[sumIndex] = sumRes
        }
    }
    while(res[0] === 0) res.shift()
    return res.join('')
};  

console.log(multiply("123", '456'))
