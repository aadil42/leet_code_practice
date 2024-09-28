/**
 * Using Array as queue as the max num of calls is not too great.
 * Can use link list instead if the function calls becomes too great.
 * https://leetcode.com/problems/design-circular-deque
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue = [];
    this.k = k;
};

/** 
 * Time O(n) | Space O(1);
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull()) return false;
    this.queue.unshift(value);
    return true;
};

/** 
 * Time O(1) | Space O(1);
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull()) return false;
    this.queue.push(value);
    return true;
};

/**
 * Time O(n) | Space O(1);
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty()) return false;
    this.queue.shift();
    return true;
};

/**
 * Time O(1) | Space O(1);
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty()) return false;
    this.queue.pop();
    return true;
};

/**
 * Time O(1) | Space O(1);
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.queue[0];
};

/**
 * Time O(1) | Space O(1);
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.queue.length - 1];
};

/**
 * Time O(1) | Space O(1);
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

/**
 * Time O(1) | Space O(1);
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.k;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */