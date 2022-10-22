var deleteDuplicates = function(head) {
  const map = new Map();
  let newHead = new ListNode();
  newHead.next = head;
  let pre = newHead;
  let current = head;
  while(current) {
      if(map.has(current)) {
          pre.next = current.next;
          current = current.next;
      }else {
          map.set(current, current)
          pre = current;
          current = current.next;
      }
  }
  return newHead.next
};

const t = {
  val: 
}