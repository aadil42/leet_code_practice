/**
 * 
 * Djikstra's Algorithm
 * Time O(n) | Space O(n^2)
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {

    // create graph
    const graph = {};
    for(let  i = 0; i < edges.length; i++) {
        const sourceNode = edges[i][0];
        const targetNode = edges[i][1];

        if(graph[sourceNode]) {
            graph[sourceNode].push([succProb[i], targetNode]);
        } else {
            graph[sourceNode] = [[succProb[i], targetNode]];
        }

        if(graph[targetNode]) {
            graph[targetNode].push([succProb[i], sourceNode]);
        } else {
            graph[targetNode] = [[succProb[i], sourceNode]];   
        }
    }  

    const visited = new Set();

    // add negetive values  to make it work as max heap
    const probabilityMinHeap = new MinHeap();

    probabilityMinHeap.insert([1 ,start]);

    while(!probabilityMinHeap.isEmpty()) {

      const node = probabilityMinHeap.extractMin();
      if(node[1] === end) return Math.abs(node[0]);
      if(visited.has(node[1])) continue;
      visited.add(node[1]);

      const neihbor = graph[node[1]];
      if(!neihbor) return 0;
      for(let i = 0; i < neihbor.length; i++) {
        if(visited.has(neihbor[i][1])) continue;

       node[0] = -1*Math.abs(node[0]);

        probabilityMinHeap.insert([node[0] * neihbor[i][0], neihbor[i][1]  ]);
      }
    }

    return 0;
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
