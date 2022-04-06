
 //解法一：
 //1. 找到中点-----快慢指针
 //2. 翻转后半段链表
 //3. 与前半段对比
 var isPalindrome = function(head) {
  if(!head || !head.next) return false;
  const middle = getMiddle(head)
  // 注意这里时翻转的后半段，因为翻转前半段比较麻烦，如果为奇数时，中点与第一段翻转的关系不好界定，而如果使用后半段，不用考虑奇偶数，
  // 从下面中间点的界定方式来看，不论奇偶数都是从中点的下一个开始，与中点无关；
  let nextStart = middle.next;
  middle.next = null
  nextStart = reverse(nextStart)
  let start = head;
  while(nextStart) {
    if(start.val !== nextStart.val) return false
    start = start.next;
    nextStart = nextStart.next
}
return true
}

// 快慢指针获取中点，快指针到达末尾时候慢指针就在中点；
// 注意，对中点的节点，两个元素时候为第一个，四个元素时为第二个；
const getMiddle = (head) => {
  let slow = head, quick = head;
  while(quick.next && quick.next.next) {
    slow = slow.next;
    quick = quick.next.next
  }
  return slow
}

const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }

  return prev;
}

const t = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1,
      next: null
    }
  }
}

// console.log(isPalindrome(t))


// 解法二，一次遍历放到数组里；
// 都是o(n)的时间复杂度


const t2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};

var isPalindrome2 = function(head) {
  if(!head.next)return true
  // 链表分两截
 let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
  }
  debugger
  let halfEnd = slow, halfStart = slow.next
  let nextStart = reverse2(halfStart);
  while(head !== nextStart) {
      if(head.val !== nextStart.val) {
          return false
      }
      nextStart = nextStart.next
      head = head.next
  }
  return true
};

function reverse2 (head) {
  let pre = null;
  let curr = head;
  while(curr) {
      const next = head.next
      curr.next = pre
      pre = curr
      curr = next
  }
  return pre
}
isPalindrome2(t2)