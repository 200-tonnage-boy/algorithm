// function selectSort(arr) {
//   let min = [0, arr[0]];
//   for (let i = 0; i < arr.length - 1; i++) {
//     min = [i, arr[i]];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] <= min[1]) {
//         min = [j, arr[j]];
//       }
//     }
//     if (min[0] !== i) {
//       [arr[i], arr[min[0]]] = [arr[min[0]], arr[i]];
//     }
//   }
//   return arr;
// }

// const r = selectSort([7, 4, 2, 8, 14, 0, 11]);
// console.log(r);

// console.log([...[]]);
// const QSort = (arr=[]) => {
//   if(arr.length <=1) return arr
//   const tem = arr[0];
//   const left = [];
//   const right = [];
//   for(let i=1; i<arr.length; i++) {
//     if(arr[i] <= tem) {
//       left.push(arr[i])
//     }else {
//       right.push(arr[i])
//     }
//   }
//   return [...QSort(left), tem, ...QSort(right)]
// }
// const r = QSort([7, 4, 2, 8, 14, 0, 11]);
// console.log(r);


// const QuickSort = (arr=[]) => {
//   if(arr.length <= 1) return arr;
//   const tagIndex = arr.length >> 2;
//   const tag = arr[tagIndex];
//   const left = [], right=[], mid = []
//   arr.forEach(item => {
//     if(item===tag) {
//       mid.push(item)
//     }else if(item < tag) {
//       left.push(item)
//     }else {
//       right.push(item)
//     }
//   })
//   return [...QuickSort([...left]), ...mid, ...QuickSort([...right])]
// }




var sortArray = function (arr) {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    let tag = i
    while(tag>0 && arr[tag] < arr[tag-1]) {
      [arr[tag], arr[tag-1]] = [arr[tag-1], arr[tag]]
      tag--
    }
  }
  return arr;
};