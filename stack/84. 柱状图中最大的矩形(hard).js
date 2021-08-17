const largestRectangleArea = (heights) => {
  let max = 0
  heights = [0,...heights,0]
  const stack = []
  for (let i=0; i<heights.length;i++) {
    while(heights[i]< heights[stack[stack.length-1]]) {
      const topIndex = stack.pop()
      max = Math.max(              
        max,                      
        heights[topIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }
  return max
}
console.log(largestRectangleArea([2,4]))
