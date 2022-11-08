// 1. 额外空间 + 两遍循环；
// 主要难点在random 可能还未创建，因此用第二次循环单独处理random
var copyRandomList1 = function(head) {
  const record = new Map()
  let newHead = new Node()
  let current = newHead, pre = head;
  while(pre) {
      const newNode = new Node(pre.val)
      record.set(pre, newNode);
      current.next = newNode;
      pre = pre.next
      current = current.next
  }
  pre = head, current = newHead.next
  while(pre) {
      let rendom = record.get(pre.random)
      current.random = rendom
      pre = pre.next;
      current = current.next
  }
  return newHead.next
};