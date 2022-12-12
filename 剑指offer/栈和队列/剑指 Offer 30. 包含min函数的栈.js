// 解法一：两个栈，第二个栈与第一个栈同步，代表每一个元素对应的最小值，所以栈顶元素就是当前的最小值；





// 解法二：更优的解法，不用额外空间，stack存值的时候存的是差值；通过小于0或者大于0 判断值与最小值的关系；

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minValue = 0;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if(!this.stack.length) {
      this.stack.push(0)// 注意这里的判断，第一个元素进去的差值单独赋值0
      this.minValue = x
      return
  }
  const diff = x - this.minValue;
  this.minValue = Math.min(x, this.minValue)
  this.stack.push(diff)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  if(item < 0) {
      this.minValue = this.minValue - item
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1]
  if(item <= 0) return this.minValue;
  return this.min + item
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  return this.minValue;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   // --> 返回 -3.
minStack.pop();
minStack.top();      // --> 返回 0.
minStack.min();   // --> 返回 -2.