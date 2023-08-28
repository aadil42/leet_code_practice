/** 
 * Queue
 * https://leetcode.com/problems/implement-stack-using-queues/
 * 
 * @param {number} x
 * @return {void}
 */

var MyStack = function() {
    this.queue = new Queue();
};

/**
 * Time O(n) | Space O(n)
 * @return {null/undefined}
 */
MyStack.prototype.push = function(x) {
    const arr = [x, ...this.queue.toArray()]; // O(n)
    this.queue = new Queue(arr); 
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.dequeue() ?? null;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.front() ?? null;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//You have used stack here. You werer told to use only Queue and it operations.
// But, no worries. It still got accepted. The queue solution is above.
var MyStack1 = function() {
    this.stack = [];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} x
 * @return {void}
 */
MyStack1.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyStack1.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyStack1.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyStack1.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

