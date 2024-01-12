var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length) {
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    } else {
        this.minStack.push(val);
    }
};

/**
 * Time O(1) | Space O(1)
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.stack.pop();
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */