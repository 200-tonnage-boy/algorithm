const test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let newHead = new ListNode();
  newHead.next = head;
  let pre = newHead,
    current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      const val = current.val;
      while (current && current.val === val) {
        current = current.next;
      }
      pre.next = current;
    } else {
      pre = current;
      current = current.next;
    }
  }
  return newHead.next;
};
