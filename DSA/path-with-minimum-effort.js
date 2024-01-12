/**
 * 
 * Dijkstra's Algorithm
 * n = number of columns, m = number of rows
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/path-with-minimum-effort
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    const heightsPeak = new MinHeap();
    const ROW = heights.length - 1;
    const COL = heights[0].length - 1;
    const visited = new Set();

    const isNotValid = (row, col) => {
        if(row < 0 || row > ROW) return true;
        if(col < 0 || col > COL) return true;
        if(visited.has(`${row}-${col}`)) return true;
        return false;
    }

    // add initial node.
    heightsPeak.insert([0,0,0]);
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    while(!heightsPeak.isEmpty()) {
        const [heightDiff, row, col] = heightsPeak.extractMin();
        const hash = `${row}-${col}`; 
        visited.add(hash);
        if(row === ROW && col === COL) return heightDiff;

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            if(isNotValid(nextRow, nextCol))  continue;
            const absDiff = Math.abs(heights[row][col] - heights[nextRow][nextCol]);
            const nextDiff = Math.max(absDiff, heightDiff)
            heightsPeak.insert([nextDiff, nextRow, nextCol]);
        }
    }

};

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