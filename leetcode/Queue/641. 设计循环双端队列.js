/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.queue = []
  this.length = k
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if ( this.queue.length< this.length) {
      this.queue.unshift(value)
      return true
  }
  return false
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
   if (this.queue.length< this.length) {
      this.queue.push(value)
      return true
  }
  return false
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
   if (0<this.queue.length) {
      this.queue.shift()
      return true
  }
  return false
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
   if (0<this.queue.length) {
      this.queue.pop()
      return true
  }
  return false
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if(!this.queue.length) return -1
  return this.queue[0]
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
   if(!this.queue.length) return -1
  return this.queue[this.queue.length-1]
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return Boolean(!this.queue.length)
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
   return Boolean(this.queue.length === this.length)
};
