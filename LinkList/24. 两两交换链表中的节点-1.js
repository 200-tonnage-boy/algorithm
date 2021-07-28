// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// head = [1,2,3,4]
// 输出：[2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 解法1： 递归 时间复杂度  O(n) 空间O(n)调用栈
 var swapPairs = function(head) {
   if(head===null || head.next===null) {
     return head
   }
   // 假设有两个结点 head为原始头 新的第二个  newhead为原始第二个  新的头
   const newHead = head.next
   head.next = swapPairs(newHead.next)// 原始头应该变成第二个  其next链接剩余部分
   newHead.next = head
   return newHead

};

// 解法2 循环
var swapPairs2 = function(head) {
  const newHead = new ListNode()
  newHead.next = head
  const tem = newHead
  while(tem.next !==null && tem.next.next!==null) {
    let Q = tem.next.next;
    let S = tem.next
    S.next =  Q.next
    Q.next = S
    tem = S
  }
  return newHead.next
};

