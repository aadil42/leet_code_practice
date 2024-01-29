

var Node = function(next = null, val = null) {
    this.next = next;
    this.val = val;
}

var MyQueue = function() {
    this.front = null;
    this.back = null;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
    if(this.empty()) {
        this.front = new Node(null, x);
        this.back = this.front;
        return;
    }

    this.back.next = new Node(null, x);
    this.back = this.back.next;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const val = this.front.val;
    this.front = this.front.next;
    return val;
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front.val;
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (!this.front && true) || false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
////////////////

var MyQueue1 = function() {
    this.enqueuStack = [];
    this.dequeueStack = [];
};

/** 
 * Time O(n) | Space O(n)
 * @param {number} x
 * @return {void}
 */
MyQueue1.prototype.push = function(x) {
    while(this.dequeueStack.length) {
        this.enqueuStack.push(this.dequeueStack.pop());
    }
    this.enqueuStack.push(x);
};

/**
 * Time O(n) | Space O(n)
 * @return {number}
 */
MyQueue1.prototype.pop = function() {
    while(this.enqueuStack.length) {
        this.dequeueStack.push(this.enqueuStack.pop());
    }
    return this.dequeueStack.pop();
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MyQueue1.prototype.peek = function() {
    if(this.dequeueStack.length) return this.dequeueStack[this.dequeueStack.length - 1];
    return this.enqueuStack[0];
};

/**
 * Time O(1) | Space O(1)
 * @return {boolean}
 */
MyQueue1.prototype.empty = function() {
    return (!this.enqueuStack.length && !this.dequeueStack.length && true) || false
};

/** 
 * Your MyQueue1 object will be instantiated and called as such:
 * var obj = new MyQueue1()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */