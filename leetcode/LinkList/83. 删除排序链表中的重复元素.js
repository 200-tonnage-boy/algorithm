// 注意是排序链表
// 一个指针即可，每次只关注当前和下一个元素的关系
// 发生重复只移除下一个，指针不移动

var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let current = head;
  while (current.next) {
      if(current.val === current.next.val) {
          current.next = current.next.next
      }else {
          current = current.next
      }
  }
  return head
};