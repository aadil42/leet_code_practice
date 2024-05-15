/**
 * Priority Queue | Dijkstra's algorithm
 * Time O((n*m)^2) | Space O(n*m)
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    
    // a variable that tells if we reached to the target.
    const ROW = grid.length;
    const COL = grid[0].length;

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const isOutOfBound = (r,c) => {
        if(r === ROW) return true;
        if(c === COL) return true;
        if(r < 0) return true;
        if(c < 0) return true;
        return false;
    }

    // make all zeros to Infinity;
    // make all 1s to null
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j] === 0) {
                grid[i][j] = Infinity;
            }
            if(grid[i][j] === 1) {
                grid[i][j] = null;
            }
        }
    }

    const bfs = (r,c) => {

        const q = new Queue();
        const visited = new Set();

        q.enqueue([r,c,0]);


        while(!q.isEmpty()) {
            
            let size = q.size();

            while(size) {
                const [row, col, distance] = q.dequeue();
                visited.add(`${row}-${col}`);
                if(grid[row][col]) {
                    grid[row][col] = Math.min(grid[row][col], distance);
                }

                for(let i = 0; i < directions.length; i++) {
                    const nextRow = row + directions[i][0];
                    const nextCol = col + directions[i][1];

                    if(visited.has(`${nextRow}-${nextCol}`)) continue;
                    if(isOutOfBound(nextRow, nextCol)) continue;
                    if(!grid[nextRow][nextCol]) continue;
                    
                    q.enqueue([nextRow, nextCol, distance + 1]);
                }
                size--;
            }
        }
    }

    for(let i = 0; i < ROW;  i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j] === null) bfs(i,j);
        }
    }

    let safeFactor = Infinity;
    const maxPQ = new MaxHeap();

    if(grid[0][0]) {
        maxPQ.insert([grid[0][0], 0, 0]);
    }

    const visited = new Set();

    while(!maxPQ.isEmpty()) {
        const [distance, row, col] = maxPQ.extractMax();
        safeFactor = Math.min(safeFactor, distance);
        // console.log(distance, row, col);
        if(row === ROW - 1 && col ===  COL - 1) return safeFactor;

        visited.add(`${row}-${col}`);
        
        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];

            if(visited.has(`${nextRow}-${nextCol}`)) continue;
            if(isOutOfBound(nextRow, nextCol)) continue;
            if(!grid[nextRow][nextCol]) continue;

            maxPQ.insert([grid[nextRow][nextCol], nextRow, nextCol]);
        }
    }

    return 0;
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(valueArray) {
    this.heap.push(valueArray);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      currentIndex > 0 &&
      this.heap[currentIndex][0] > this.heap[this.getParentIndex(currentIndex)][0]
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.hasLeftChild(currentIndex)) {
      let largestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.heap[this.getRightChildIndex(currentIndex)][0] >
          this.heap[this.getLeftChildIndex(currentIndex)][0]
      ) {
        largestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex][0] < this.heap[largestChildIndex][0]) {
        this.swap(currentIndex, largestChildIndex);
        currentIndex = largestChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
}

// // Example usage:
// const maxHeap = new MaxHeap();
// maxHeap.insert([10]);
// maxHeap.insert([5]);
// maxHeap.insert([17]);
// maxHeap.insert([8]);
// maxHeap.insert([25]);

// console.log(maxHeap.peek()); // Output: [25]
// console.log(maxHeap.size()); // Output: 5
// console.log(maxHeap.extractMax()); // Output: [25]
// console.log(maxHeap.peek()); // Output: [17]
