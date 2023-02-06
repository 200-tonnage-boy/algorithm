// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。
// 进阶：

// 你是否可以使用 O(1) 空间解决此题？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//解法1：借助额外map，
// 时间n，空间n
 var detectCycle = function(head) {
  if (head===null || head.next===null) return null
 const map = []
 while(head) {
   if (map.includes(head)) return head;
   map.push(head)
   head = head.next
 }
 return null
};

//解法2：快慢指针
// 路洛伊德环检测法，第一次相遇的点，到环入口的距离，等于head到环入口的距离
// 时间n，空间1
var detectCycle2 = function(head) {
  if (head===null || head.next===null) return null
 let quick=head,slow = head;
 while(quick!==null && quick.next!==null) {
   quick= quick.next.next
   slow = slow.next
  if (quick===slow) {
    let tem = head
    while(tem!==slow){
      tem = tem.next
      slow=slow.next
    }
    return tem
  }
 }  
 return null
};
