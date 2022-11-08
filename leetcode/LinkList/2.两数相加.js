var addTwoNumbers = function(l1, l2) {
  let curry = 0;
  const newHead = new ListNode();
  let current = newHead
  while(l1 || l2) {
      const sum = curry + (l1?.val || 0) + (l2?.val || 0);
      const val = sum % 10;
      curry = Math.floor(sum / 10);
      current.next = new ListNode(val)
      l1 = l1?.next
      l2 = l2?.next
      current = current.next
  }
  if(curry) {
       current.next = new ListNode(curry)
  }
  return newHead.next
};