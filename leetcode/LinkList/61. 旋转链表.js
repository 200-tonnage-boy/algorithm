// 画图  画图 画图  找出 k与n的关系！！！！！！
var rotateRight = function(head, k) {
  if(!head || !head.next || !k) return head
  let n = 1;
  let current = head
  while(current.next) {
      n++;
      current = current.next
  };

  current.next = head;
  let res = head;
  let tag = n - (k % n) + 1;
  while(tag > 1) {
      tag--
      res = res.next
      current = current.next
  }
  current.next = null
  return res
};