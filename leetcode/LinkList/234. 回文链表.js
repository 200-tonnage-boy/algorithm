var isPalindrome = function(head) {
  if(!head) {
      return false
  }
  if(head && !head.next) {
      return true
  }
  
  // 找到中间节点  
  const middle = findMiddle(head)
  let nextStart = middle.next // ******************* 如果是偶数，比如4个，middle要是第二个，就是为了这里奇偶统一取next
  // 反转后半截.
  let next = reverse(nextStart)
  // 对比
  while(next){
      if(next.val !== head.val) return false
      next = next.next
      head = head.next
  }
  return true
};

function findMiddle (head) {
  let slow = quick = head;
  while(quick.next && quick.next.next) {
      quick = quick.next.next
      slow = slow.next
  }
  return slow
}

function reverse (head) {
  let pre = null;
  while (head) {
      const next = head.next;
      head.next = pre;
      pre = head
      head = next
  }
  return pre
}