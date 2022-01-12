// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

// 输入：head = [1], n = 1
// 输出：[]

// 输入：head = [1,2], n = 1
// 输出：[1]

// 剑指offer22 进阶版，再加一个指针保留slow的前一个，用于删除
var removeNthFromEnd = function(head, n) {
  let q = head;
 let s = head;
 let preHead = new ListNode()
 preHead.next = head;
 let pre = preHead
 for(let i=0; i<n-1; i++) {
     q = q.next
 }
 while(q .next) {
     q = q.next
     s = s.next
     pre = pre.next
 }
 pre.next = s.next
 return preHead.next
};