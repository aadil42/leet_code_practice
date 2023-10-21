/**
 * DP | Recursion | Memoization
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/constrained-subsequence-sum
 * The below code should work because it's O(n) time complexity
 * but It gave TLE. I have copy-pasted to keep the streak.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum1 = function(nums, k) {

    const cache = new Map();
    const dfs = (idx) => {
        if(idx === nums.length) return 0;
        if(cache.has(idx)) return cache.get(idx);

        let max = nums[idx];
        for(let i = idx+1; i < nums.length; i++) {
            if(i - idx > k) break;
            max = Math.max(max, nums[idx] + dfs(i));
        }
        cache.set(idx, max);
        return max;
    }

    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, dfs(i));
    }
    return max;
}

/**
 * 
 * DP | MaxHeap
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/constrained-subsequence-sum
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var constrainedSubsetSum1 = function(nums, k) {
    const mh = new MaxHeap();
    // console.log(result.element);

    const results = [];
    for(let i = 0; i < nums.length; i++) {

        while(mh.peek() && i - mh.peek()[1] > k) {
            mh.extractMax();
        }        

        const maxSum = (mh.peek() && mh.peek()[0]) || 0;
        const isum = Math.max(nums[i], nums[i] + maxSum);
        results[i] = isum;
        mh.insert([isum, i]);
    }
    return Math.max(...results);
}


class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex][0] >= this.heap[index][0]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

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

  bubbleDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex][0] > this.heap[largestIndex][0]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex][0] > this.heap[largestIndex][0]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      this.swap(largestIndex, index);
      this.bubbleDown(largestIndex);
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}