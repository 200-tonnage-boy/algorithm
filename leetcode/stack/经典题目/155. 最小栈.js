// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
/**
 * initialize your data structure here.
 */

// 第一种方法，辅助栈，让最小值栈与主栈一一对应
var MinStack = function() {
  this.stack = []
  this.minValStack = [Infinity]
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.minValStack.push(Math.min(val, this.minValStack[this.minValStack.length - 1]))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minValStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minValStack[this.minValStack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

// 第二种方法，使用二维数组，把最小值和栈元素存在一起；