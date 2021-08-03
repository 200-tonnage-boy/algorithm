// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：
// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 核心思想：
//1. 分段截取，pre记录上一段的最后一个结点；新建一个头结点也是为了方便操作，省的考虑边界情况
//2. 截取子段 送进去翻转， 反转完出来链接  注意：对于子链表，其尾结点next不是next；考虑好是在里面处理还是外面处理；
//3. 注意操作完成后链接操作，以及各变量应该重新赋值的位置；

//时间复杂度O（n）：拢共进入n/k次的大循环，翻转子链表循环k次，内部的for循环是并列的；
//空间复杂度O(1)
var reverseKGroup1 = function (head, k) {
  if (k <= 1) return head;
  const newHead = new ListNode();
  newHead.next = head;
  let pre = newHead; // 用于记录前面一段的最后一个结点，链接后面的
  let move = pre; // 用于往后滚动K个位置
  while (head) {
    for (let i = 0; i < k; i++) {
      move = move.next;
      if (!move) return newHead.next;
    }
    // 到这里子串的头和尾已经确定
    const nextHead = move.next;
    const [sonHead, sonEnd] = reverse1(head, move);
    sonEnd.next = nextHead;
    pre.next = sonHead;
    pre = sonEnd;
    move = sonEnd;
    head = nextHead;
  }
  return newHead.next;
};

const test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};
// console.log(reverseKGroup1(test, 2)); //21435

const reverse1 = (start, end) => {// 把尾结点next指向null 用于终止循环， 放到外面再去链接
  end.next = null;
  let pre = null;
  let current = start;
  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return [end, start];
};






const reverse2 = (start, end) => {// 把尾结点next指向null 用于终止循环， 放到外面再去链接
  let pre = null;
  let current = start;
  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return null;
};
// 递归版本；
// 核心思想： 递归每次只需要反转K个，然后链接后面一段的递归结果就可以；
// 终止条件： 如果head为空（对应刚好是K的整数倍）；如果循环K次的时候，出现Null，此时直接返回head，因为这一段就不用翻转了；
// 返回结果： 如果没提前终止，应该返回move，因为对于当前子链表来说，第K个结点就是完全翻转后的头结点
var reverseKGroup2 = function (head, k) {
  if (!head) return null
  if (k<=1) return head
  let move = head
  for (let i=0; i< k-1; i++) {// 注意这里是k-1；因为move是从第一个结点开始的；
    move = move.next
    if(!move) return head
  }
  const nextParamsHead = move.next;
  move.next = null
  reverse2(head,move)
  head.next = reverseKGroup2(nextParamsHead,k)
  return move
};
console.log(reverseKGroup2(test, 3)); //21435