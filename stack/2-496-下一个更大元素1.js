var nextGreaterElement = function(nums1, nums2) {
    const res = []// 返回值
    const stack = []// 栈
    const map = new Map()
    for(let i=0; i<nums2.length; i++) {
        while(Boolean(stack.length) && nums2[i] > stack[stack.length - 1]) {// 后面有比自己大的，注意要用while
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }
    if(stack.length) {
        stack.forEach(item => {
            map.set(item, -1)
        })
    }
    nums1.forEach(item => {
        if (map.has(item)) {
            res.push(map.get(item))
        }
    })
    return res 
};