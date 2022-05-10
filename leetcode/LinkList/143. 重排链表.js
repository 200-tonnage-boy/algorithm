// 方法一： 借助额外空间
var reorderList = function(head) {
  if(!head || !head.next) return head
  const record = []
  while(head) {
    const next  = head.next
    head.next = null // 注意要提前把链表断开，为下面做准备，不断开的话下面的while循环要判断在相等left === right的时候去把最后一个元素next=null；
    record.push(head)
    head = next
  }
  let tag=true, left=0, right=record.length-1;
  while(left < right) {// 注意这里不能取等号，最后一个变量不需要再链接了
      if(tag) {
          record[left].next = record[right]
          left++
      }else {
          record[right].next = record[left]
          right--
      }
      tag = !tag
  }

  return record[0]
};




// 方法二：
//1. 快慢指针找到中点
//2. 反转后半段
//3. 前半段+反转后的后半段分别插入；
var reorderList = function(head) {
  if(!head || !head.next) return
  let slow = head, fast=head;
  while(fast&&fast.next&&fast.next.next) {
      slow = slow.next
      fast = fast.next.next
  }
  // slow.next 为下一段开始的头， fast 为结束的地方
  const nexPretHead = slow.next;
  const nextHead = reverse(nexPretHead);
  slow.next = null// 提前断开两段链表；
  const newHead = new ListNode()
  slow = head, fast = nextHead
  let tag = true, tem=newHead
  while(slow || fast) {
      if(tag) {
          tem.next =  slow
          slow = slow.next
      }else {
          tem.next = fast
          fast = fast.next
      }
      tag = !tag
      tem = tem.next
  }
  return newHead.next

};

const reverse = (head) => {
  let pre = null;
  let curr = head;
  while (curr) {
      const next = curr.next
      curr.next = pre
      pre = curr
      curr = next
  }
  return pre
}

const test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

reorderList(test)