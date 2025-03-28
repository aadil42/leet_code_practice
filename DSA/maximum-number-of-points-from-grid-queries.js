/**
 * Time O(q*log(q)) + n*m*log(m*n)
 * Graph | PriorityQueue | BFS
 * https://leetcode.com/problems/maximum-number-of-points-from-grid-queries
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {

    const minQ = new MinHeap();

    const ROW = grid.length;
    const COL = grid[0].length;

    const outOfBound = (row, col) => {

        if (row < 0) return true;
        if (row === ROW) return true;
        if (col === COL) return true;
        if (col < 0) return true;

        return false;
    }

    const directions = [[1,0], [-1, 0], [0, 1], [0, -1]];

    const visited = new Set();
    visited.add('0,0');
    minQ.enqueue([grid[0][0], 0, 0]);

    const queriesAns = [];
    
    
    queries = queries.map((q, i) => [q, i]).sort((a,b) => a[0]-b[0]);

    let count = 0;

    for (let i = 0; i < queries.length; i++) {

        const [query, idx] = queries[i];

        while (!minQ.is_empty() && minQ.front()[0] < query) {
            
            const [val, row, col] = minQ.dequeue();
            count++;

            for (let i = 0; i < directions.length; i++) {

                const [nextStepRow, nextStepCol] = directions[i];

                const nextRow = row + nextStepRow;
                const nextCol = col + nextStepCol;

                if (visited.has(`${nextRow},${nextCol}`)) continue;
                if (outOfBound(nextRow, nextCol)) continue;
                visited.add(`${nextRow},${nextCol}`);

                minQ.enqueue([grid[nextRow][nextCol], nextRow, nextCol]);
            }

        }

        queriesAns[idx] = count;
    }

    return queriesAns;
};

class MinHeap {
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
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      // Compare first element of the arrays
      if (this.heap[parentIndex][0] <= this.heap[index][0]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.is_empty()) return null;

    const min = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.is_empty()) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleDown(index) {
    let smallestIndex = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  is_empty() {
    return this.heap.length === 0;
  }
}
