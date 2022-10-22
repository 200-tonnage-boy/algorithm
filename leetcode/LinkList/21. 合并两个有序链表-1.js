// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

var mergeTwoLists = function(l1, l2) {
  const newHead = new ListNode(-Infinity)
  let pre = newHead
  while(l1&&l2) {
      if(l1.val<=l2.val) {
          pre.next = l1
          l1 = l1.next
      }else {
          pre.next = l2
          l2 = l2.next
      }
      pre = pre.next
  }
  // 可能会剩下一个
  pre.next = l1===null? l2 : l1;
  return newHead.next
};

var mergeTwoLists2 = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1
    const newHead = new ListNode();
    let current = newHead;
    while(list1||list2) {
        if(!list1 && list2) {
            current.next = list2
            return newHead.next
        }
        if(list1 && !list2) {
            current.next = list1
            return newHead.next
        }
        if(list1.val <= list2.val) {
            current.next = list1
            current = list1;
            list1 = list1.next
        } else {
            current.next = list2
            current = list2;
            list2 = list2.next
        }
    }
    return newHead.next
};