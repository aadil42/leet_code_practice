// node class.
var Node = function(val, next) {
    this.val = val || null;
    this.next = next || null;
}

/**
 * LinkedList | Queue
 * https://leetcode.com/problems/design-circular-queue/
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.dummyNode = new Node();
    this.curr = this.dummyNode;
    this.size = 0;
    this.capacity = k;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;

    this.curr.next = new Node(value);
    this.curr = this.curr.next;
    this.size++;

    return true;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;

    this.dummyNode.next = this.dummyNode.next.next;
    this.size--;

    /// if by removing the node the queue becomes empty than point curr to dummyNode.
    if(this.isEmpty()) this.curr = this.dummyNode;
    return true;
};

/**
 * 
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.dummyNode.next.val;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty())  return -1;
    return this.curr.val;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.capacity === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */