var trap = function (height) {
    const stack = []
    let res = 0
    for(let i=0; i<height.length; i++) {
        while(stack.length&&height[i] > height[stack[stack.length -1]]) {
            const top = stack.pop()
            if(!stack.length) continue
            const left = stack[stack.length - 1]
            const width = i - left -1
            const currHeight = Math.min(height[left], height[i]) -  height[top]
            res += width * currHeight
        }
        stack.push(i)
    }
    console.log(res)
    return res
};
trap([0,1,0,2,1,0,1,3,2,1,2,1])
