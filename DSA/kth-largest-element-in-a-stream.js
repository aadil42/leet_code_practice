/**
 * Using MinHeap
 * Time O(log(n)*n) | Space O(k)
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;
    for(let i = 0; i < nums.length; i++) {
        this.minHeap.insert(nums[i]);
    }
    while(this.minHeap.size() > k) {
        this.minHeap.extractMin();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val);
    if(this.minHeap.size() === this.k) {
      return this.minHeap.peek();
    }
    this.minHeap.extractMin();
    return this.minHeap.peek();
};

// minHeap data structure
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get the index of the parent node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the index of the left child node
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the index of the right child node
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Maintain the min-heap property by bubbling up an element
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break; // If parent is smaller or equal, heap property is maintained
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Extract the minimum element from the heap
  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }
    return min;
  }

  // Maintain the min-heap property by bubbling down an element
  bubbleDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(smallestIndex, index);
      this.bubbleDown(smallestIndex);
    }
  }

  // Peek at the minimum element in the heap without extracting it
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */