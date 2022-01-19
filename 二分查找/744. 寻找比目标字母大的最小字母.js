const nextGreatestLetter = (letters, target) => {
  if(!letters.length) return '';
  const tartCode = target.charCodeAt(0);
   const len = letters.length;
  let left = 0, right = len - 1;
  while(left <= right) {
      const mid = Math.floor((right + left) / 2);
      const code = letters[mid].charCodeAt(0)
      if(code > tartCode) {// 注意这里为什么不取》=,因为等于的时候不要往左边归并，比如【cfj】t=c的时候right会越界到-1；
          right = mid - 1;
      }else {
          left = mid + 1
      }
  }
  return left >= len ? letters[0] : letters[left]
};


const letters = ["c", "f", "j"]
const target = "j"
console.log(nextGreatestLetter(letters, target))