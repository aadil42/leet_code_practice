/**
 * MaxPriorityQueue | Sorting 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/ipo/description/
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    
    capital = capital.map((cap, idx) => {
        const p = profits[idx];
        return [cap, p];
    });

    capital.sort((a,b) => a[0]-b[0]);
    let maxCap = w;
    let i = 0;

    const maxProfitQueue = new MaxHeap();
    while(k) {
        while(i < capital.length && capital[i][0] <= maxCap) {
            maxProfitQueue.insert(capital[i][1]);
            i++;
        }
        if(!maxProfitQueue.isEmpty()) {
            maxCap += maxProfitQueue.extractMax();
        }
        k--;
    }

    return maxCap;
};


class MaxHeap {
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

  // Maintain the max-heap property by bubbling up an element
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break; // If parent is greater or equal, heap property is maintained
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Extract the maximum element from the heap
  extractMax() {
    if (this.isEmpty()) {
      return null;
    }

    const max = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }
    return max;
  }

  // Maintain the max-heap property by bubbling down an element
  bubbleDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      this.swap(largestIndex, index);
      this.bubbleDown(largestIndex);
    }
  }

  // Peek at the maximum element in the heap without extracting it
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