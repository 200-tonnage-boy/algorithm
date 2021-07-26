// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

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
// 关键问题在于操作时不丢失相互关系，单链表无法知道当前结点的前驱，因此需要用变量保存
 var reverseList = function(head) {// 时间复杂度 O(n) 空间O(1)
  let preNode = null;
  let currentNode = head
  let nextNode = null;
  while(currentNode) {
    nextNode = currentNode.next
    currentNode.next = preNode;
    preNode = currentNode
    currentNode = nextNode;
  }
  return preNode
};

// 解法2： 递归
// -------------》
//《-------------
var reverseList = function(head) {
  if (!head||!head.next) return head
  const resHead = reverseList(head.next)
  head.next.next  = head
  head.next = null
  return resHead
};