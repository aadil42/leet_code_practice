/**
 * Graph | BFS | Priority Queue
 * Time O(n^2  * log(n)) | Space O(n^2)
 * https://leetcode.com/problems/swim-in-rising-water/
 * understanding the problem is a bit trikier than solving it. 
 * the solution is pretty straight forward.
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    
  const n = grid.length;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  // helper function
  const isDestination = (row, col) => {
      return (row === n - 1 && col === n-1);
  }
  // helper function
  const isOutOfBound = (row, col) => {
      if(row === n) return true;
      if(col === n) return true;
      if(row < 0) return true;
      if(col < 0) return true;
      return false;
  }

  const minQueue = new MinHeap();

  const visited = new Set();
  minQueue.insert([grid[0][0], 0, 0]);


  let maxHeight = 0;
  while(!minQueue.isEmpty())  {

      const cell = minQueue.extractMin();

      const height = cell[0];
      const row = cell[1];
      const col = cell[2];

      visited.add(`${row}-${col}`);

      maxHeight = Math.max(maxHeight, height);
      if(isDestination(row, col)) return maxHeight;

      for(let i =  0; i < directions.length; i++) {
          const nextRow = row + directions[i][0];
          const nextCol = col + directions[i][1];
          
          if(isOutOfBound(nextRow, nextCol)) continue;
          if(visited.has(`${nextRow}-${nextCol}`)) continue;

          const nextHeight = grid[nextRow][nextCol];
          minQueue.insert([nextHeight, nextRow, nextCol]);
      }
  }
};

/**
 * Graph | BFS | Priority queue 
 * Time O(n^2 * log(n)) | Space O(n^2)
 * @param {number[][]} grid
 * @return {number}
 */

var swimInWater1 = function(grid) {

    const destination = grid.length - 1;
    const elivationHeap = new MinHeap();
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    elivationHeap.insert([ grid[0][0], [0,0] ]); // adding value and grid cord
    const visited = new Set();
    visited.add("0#0");
    const isOutOfBound = (r,c) => {
        if(r > destination || r < 0) return true;
        if(c > destination || c < 0) return true;
        return false;
    }
    while(!elivationHeap.isEmpty()) {
        const node = elivationHeap.extractMin();
        if(node[1][0] === destination && node[1][1] === destination) {
          console.log(node[1][0], node[1][1]);
          return node[0];
        }

        for(let i = 0; i < directions.length; i++) {
            const row = node[1][0] + directions[i][0];
            const col = node[1][1] + directions[i][1];

            const hash = row + "#" + col;
            if(visited.has(hash) || isOutOfBound(row,col)) continue;
            visited.add(hash);
            const val = Math.max(node[0], grid[row][col]);
            elivationHeap.insert([val, [row,col]]);
        }
    };

}

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

