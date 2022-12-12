var CQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if(!this.outStack.length){
      if(!this.inStack.length) {
          return -1;
      }
      this.inToOut()
  }
  return this.outStack.pop()

};

CQueue.prototype.inToOut = function () {
 // 注意这里的顺序，两个栈，只能操作一头；
  while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/