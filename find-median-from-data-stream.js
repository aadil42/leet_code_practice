// 17 out of 21 test cases are passing on leetcode it gives me error saying "output limit exeeded."
// the code looks fine to me.
var MedianFinder = function() {
    
    this.minHeap = new maxPriorityQueue();
    this.maxHeap = new minPriorityQueue();
};

class minPriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    // this is for the min heap
    add(val) {
        this.queue.push(val);
        this.bubbleUP(this.queue.length - 1);
        this.size++;
    }

    poll() {
        this.swap(0, this.queue.length - 1);
        const popped = this.queue.pop();
        this.bubbleDown(0);
        this.size--;
        return popped;
    }

    //this is for the min heap
    bubbleUP(index) {

        if(index <= 0) return;
        if(this.queue[index] > this.queue[this.getParent(index)]) return;

        if(this.queue[index] < this.queue[this.getParent(index)]) {
            this.swap(index, this.getParent(index));
            this.bubbleUP(this.getParent(index));
        }
    }

    bubbleDown(index) {
        if(this.queue[index] < this.queue[this.getLeftChild(index)] &&
            this.queue[index] < this.queue[this.getRightChild(index)]) return;
            
         if(this.queue[index] > this.queue[this.getLeftChild(index)]) {
            this.swap(index, this.getLeftChild(index));
            this.bubbleDown(this.getLeftChild(index));
         }   

         if(this.queue[index] > this.queue[this.getRightChild(index)]) {
            this.swap(index, this.getRightChild(index));
            this.bubbleDown(this.getRightChild(index));
         }
    }

    getLeftChild(index) {
        return (index * 2) + 1;
    }
    getRightChild(index) {
        return (index * 2) + 2;
    }
    swap(topNode, bottomNode) {
        const temp = this.queue[topNode];
        this.queue[topNode] = this.queue[bottomNode];
        this.queue[bottomNode] = temp; 
    }
    getParent(index) {
        return Math.ceil((index - 2)/2);
    }
    peek() {
        return this.queue[0];
    }
    print() {
        return this.queue;
    }
}

class maxPriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    // this is for max heap 
    add(val) {
        this.queue.push(val);
        this.bubbleUp(this.queue.length - 1);
        this.size++;
    }

    // this is for the  max heap
    poll() {
        this.swap(0, this.queue.length - 1);
        const popped = this.queue.pop();
        this.bubbleDown(0);
        this.size--;
        return popped;
    }

    // this will bubble down to the max heap
    bubbleDown(index) {
        if(this.queue[index] > this.queue[this.getLeftChild(index)] &&
            this.queue[index] > this.queue[this.getRightChild(index)]) return;
            
         if(this.queue[index] < this.queue[this.getLeftChild(index)]) {
            this.swap(index, this.getLeftChild(index));
            this.bubbleDown(this.getLeftChild(index));
         }   

         if(this.queue[index] < this.queue[this.getRightChild(index)]) {
            this.swap(index, this.getRightChild(index));
            this.bubbleDown(this.getRightChild(index));
         }
    }

    // this will bubble up to the max tree.
    bubbleUp(index) {

        if(index <= 0) return;
        if(this.queue[index] < this.queue[this.getParent(index)]) return;

        if(this.queue[index] > this.queue[this.getParent(index)]) {
            this.swap(index, this.getParent(index));
            this.bubbleUp(this.getParent(index));
        }
    }

    getLeftChild(index) {
        return (index * 2) + 1;
    }
    getRightChild(index) {
        return (index * 2) + 2;
    }
    swap(topNode, bottomNode) {
        const temp = this.queue[topNode];
        this.queue[topNode] = this.queue[bottomNode];
        this.queue[bottomNode] = temp; 
    }
    getParent(index) {
        return Math.ceil((index - 2)/2);
    }
    peek() {
        return this.queue[0];
    }
    print() {
        return this.queue;
    }
}



/** 
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
    
    this.minHeap.add(num);
    if(Math.abs(this.minHeap.size - this.maxHeap.size) > 1) {
        if(this.minHeap.size > this.maxHeap.size) {
            this.maxHeap.add(this.minHeap.poll());
        } else {
            this.minHeap.add(this.maxHeap.poll());
        }
     }

     if(this.minHeap.peek() > this.maxHeap.peek()) {
        this.maxHeap.add(this.minHeap.poll());
     }

     if(Math.abs(this.minHeap.size - this.maxHeap.size) > 1) {
        if(this.minHeap.size > this.maxHeap.size) {
            this.maxHeap.add(this.minHeap.poll());
        } else {
            this.minHeap.add(this.maxHeap.poll());
        }
     }

     if(this.minHeap.peek() > this.maxHeap.peek()) {
        this.maxHeap.add(this.minHeap.poll());
     }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    console.log(this.minHeap, this.maxHeap);
    if(this.minHeap.size === this.maxHeap.size) {
       return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
        if(this.minHeap.size > this.maxHeap.size) {
           return this.minHeap.peek();
        } else {
            return this.maxHeap.peek();
        }
    }
};

const median = new MedianFinder();
median.addNum(1);
median.addNum(2);
console.log(median.findMedian());
median.addNum(3);
// median.addNum(3);
// median.addNum(4);
// median.addNum(5);
console.log(median.findMedian());

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */