/**
 * 
 * Prim's Algorithm (minimum spaning tree)
 * Time O(n^2 * log(n)) | Space O(n^2)
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {

    const getDistance = (a,b) => {
        return Math.abs(points[a][0] - points[b][0]) +
        Math.abs(points[a][1] - points[b][1]);
    }

    const visited = new Set();
    let cost = 0;
    const minDistanceHeap = new MinHeap();
    const graph = {};
    // making graph
    for(let i = 0; i < points.length; i++) {
        for(let j = 0; j < points.length; j++) {
            if(i !== j) {
                if(graph[i]) {
                    graph[i].push(j);
                } else {
                    graph[i] = [j];
                }
            }
        }
    }
    visited.add(0);
    // minDistanceHeap.insert([0,0]);
    let lastNode = 0;
    while(visited.size < points.length) {

        const neighbors = graph[lastNode];
        for(let i = 0; i < neighbors.length; i++) {
            const distance = getDistance(lastNode, neighbors[i]);
            // console.log(distance,node[1]);
            if(!visited.has(neighbors[i])) {
                // console.log(neighbors[i]);
                minDistanceHeap.insert([distance, neighbors[i]]);
            }
        }

        let minDistance;
        while(!minDistanceHeap.isEmpty()) {
            minDistance = minDistanceHeap.extractMin();
            if(!visited.has(minDistance[1])) break;
        }
        
        lastNode = minDistance[1];
        visited.add(lastNode);
        cost += minDistance[0];
    }

    return cost;
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