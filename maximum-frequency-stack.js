var FreqStack = function() {
    this.frequency = {};
    this.valCount = {};
    this.count = 0;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if(this.valCount[val]) {
        // currentCount = this.valCount[val] + 1;
        this.valCount[val] += 1;
    } else {
        this.valCount[val] = 1;
    }

    if(this.valCount[val] > this.count) {
        this.frequency[this.valCount[val]] = [];
        this.count++;
    }
    this.frequency[this.valCount[val]].push(val);
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const latest = this.frequency[this.count].pop();
    if(this.frequency[this.count].length === 0) {
        this.count--;
    }
    this.valCount[latest] -= 1;
    return latest;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */