

// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 注意left和right是位置，也就是索引，先循环到指定位置然后反转拼接就可以

  let newHead = new ListNode();
  newHead.next = head;
  let pre=newHead,last=newHead;
  for(let i=1; i<=right; i++) {
      if(i<left) {
          pre = pre.next
      }
      last = last.next
  }
  let middleStart = pre.next; 
  let middleEnd = last;
  last = last.next;
  pre.next = null;
  middleEnd.next = null
  const [start, end] = reverse(middleStart, middleEnd)
  pre.next = start
  end.next = last
  return newHead.next
};

const reverse = (start, end) => {
  let pre = null; run = start; 
  while(run) {
      const next = run.next;
      run.next = pre
      pre = run
      run = next
  }
  return [end, start]
}