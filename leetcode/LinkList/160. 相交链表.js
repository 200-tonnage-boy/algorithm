//解法1 a+c b+c   -> 两个都走 a+b+c；
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null
  const map = new Set();
  let PA = headA, PB = headB;
  while(PA !== PB) {
      if(!PA) {
          PA = headB
      }
      if(!PB) {
          PB = headA
      }
      PA = PA.next;
      PB = PB.next;
  }
  return PA
};

// 解法二： 遍历A 放入list，然后遍历B；