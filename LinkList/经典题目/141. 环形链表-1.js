// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 解法1：快慢指针，时间复杂度：O(n) 空间O(1）
// 快指针一次走两步，慢的一次一步，如果有环，套一圈就相遇，此时快指针跑了两圈，每圈N/2，所以时间复杂度为N；
 var hasCycle = function(head) {
  if (head===null || head.next===null) return false
  let quick = head.next, slow = head
  while(quick!==slow) {
    if (quick === null || quick.next===null) return false
    quick = quick.next.next
    slow = slow.next
  }  
  return true
};

// 解法2： 借助额外空间 存储遍历，判重；
var hasCycle2 = function(head) {
  if (head===null || head.next===null) return false
  const map = []
  while(head) {
    if (map.includes(head)) return true;
    map.push(head)
    head = head.next
  }
  return false
};