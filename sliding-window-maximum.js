
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    compare(a, b) {
      return a[0] - b[0];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return (index * 2) + 1;
    }
  
    getRightChildIndex(index) {
      return (index * 2) + 2;
    }
  
    insert(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = this.getParentIndex(currentIndex);
  
      while (currentIndex > 0 && this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      let currentIndex = 0;
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
  
      while (leftChildIndex < this.heap.length) {
        let smallestChildIndex = rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0
          ? rightChildIndex
          : leftChildIndex;
  
        if (this.compare(this.heap[currentIndex], this.heap[smallestChildIndex]) <= 0) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
        currentIndex = smallestChildIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      }
  
      return min;
    }
  
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  /**
   * Heap | Priority Queue
   * 
   * https://leetcode.com/problems/sliding-window-maximum
   * Time O(n*log(n)) | Space O(n)
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  var maxSlidingWindow = function(nums, k) {
      
      const maxHeap = new MinHeap();
  
      let left = 0;
      let right = k - 1;
      const result = [];
      // fill the maxHeap with the first k elements.
      for(let i = 0; i < k; i++) {
          maxHeap.insert([-1*nums[i], i]);
      }
      
      while(right < nums.length) {
          const currentMax = maxHeap.peek();
          result.push(currentMax[0] * -1);
          while(maxHeap.peek() && maxHeap.peek()[1] <= left) {
              maxHeap.extractMin();
          }
          left++;
          right++;
          if(right < nums.length) maxHeap.insert([nums[right] * -1, right]);
      }
  
      return result;
  };

/////////////////////////////////////////// Alternative approch /////////////////////////////////////////
/**
 * @class Dequeue
 */
 class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount  > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] =  this.items[index -1];
            }
            this.count ++;
            this.items[0] = element;
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    peekFront(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }



    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }

}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow1 = function(nums, k) {
    
    const result = [], queue = new Dequeue();
    let left = 0, right = 0;

    while(right < nums.length) {

        while(!queue.isEmpty() && nums[queue.peekBack()] < nums[right]) {
            queue.removeBack();
        }
        queue.addBack(right);

        if(left > queue.peekFront()) {
            queue.removeFront();            
        }

        if(right + 1 >= k) {
            result.push(nums[queue.peekFront()]);
            left++;
        }
        right++;
    }

    return result;
};

nums = [7,2,4], k = 2
console.log(maxSlidingWindow(nums,k));
