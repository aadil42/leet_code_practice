// the MaxPriorityQueue and MinPriorityQueue only exist in leetcode environment. 
// it would give you "not defined" error here.

// PriorityQueue | Max pirority queue | Min priority queue
var MedianFinder = function() {
    this.maxQ = new MaxPriorityQueue();
    this.minQ = new MinPriorityQueue();
};

MedianFinder.prototype.swapMinToMax = function() {
    this.maxQ.enqueue(this.minQ.dequeue().element);
}
MedianFinder.prototype.swapMaxToMin = function() {
    this.minQ.enqueue(this.maxQ.dequeue().element);
}

/** 
 * Time O(log(n)) | Space O(1)
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    // add num to maxQueue
    this.maxQ.enqueue(num);

    if(this.maxQ.size() - this.minQ.size() > 1) {
        this.swapMaxToMin();
    }
    if(this.minQ.size() - this.maxQ.size() > 1) {
        this.swapMinToMax();
    }
    if(this.minQ.front()?.element < this.maxQ.front()?.element) {
        this.swapMaxToMin();
        this.swapMinToMax();
    }
};

/**
 * Time O(1) | Space O(1)
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if((this.minQ.size() + this.maxQ.size())%2) {
        if(this.minQ.size() > this.maxQ.size()) return this.minQ.front().element;
        if(this.maxQ.size() > this.minQ.size()) return this.maxQ.front().element;
    }

    return (this.minQ.front().element + this.maxQ.front().element)/2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
/////////////////////////////////////////////////////////////////////////////////////////////
// same approch with slightly different code.
// same time and space complexity as above.

var MedianFinder0 = function() {
    this.maxQ = new MaxPriorityQueue();
    this.minQ = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder0.prototype.balance = function() {

    if(this.maxQ.size() - this.minQ.size() > 1) {
        this.minQ.enqueue(this.maxQ.dequeue().element);
    }
    if(this.minQ.size() - this.maxQ.size() > 1) {
        this.maxQ.enqueue(this.minQ.dequeue().element);
    }
    if(this.minQ.front()?.element < this.maxQ.front()?.element) {
        this.maxQ.enqueue(this.minQ.dequeue().element);
    }
}

MedianFinder0.prototype.addNum = function(num) {

    // add num to maxQueue
    this.maxQ.enqueue(num);
    this.balance(); // after balancing  it the first time it might make it unbalanced again.
    this.balance();

};

/**
 * @return {number}
 */
MedianFinder0.prototype.findMedian = function() {
    // return;
    // if odd number of elements
    if((this.minQ.size() + this.maxQ.size())%2) {
        if(this.minQ.size() > this.maxQ.size()) return this.minQ.front().element;
        if(this.maxQ.size() > this.minQ.size()) return this.maxQ.front().element;
    }

    return (this.minQ.front().element + this.maxQ.front().element)/2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */