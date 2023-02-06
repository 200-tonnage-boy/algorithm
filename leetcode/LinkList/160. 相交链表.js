//解法1 a+c b+c   -> 两个都走 a+b+c；
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let pa = headA, pb = headB;
    while(pa !== pb) {
       pa = pa ? pa.next : headB;
       pb = pb ? pb.next : headA;
    }
    return pa
};

// 解法二： 遍历A 放入list，然后遍历B；

var getIntersectionNode = function(headA, headB) {
    const map = new Set();
    while(headA){
        map.add(headA)
        headA = headA.next
    }
    while(headB) {
        if(map.has(headB)) return headB
        headB = headB.next
    }
    return null
};