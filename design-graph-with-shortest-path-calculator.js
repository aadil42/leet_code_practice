/**
 * Time O(n) | Space O(n)
 * @param {number} n
 * @param {number[][]} edges
 */

var Graph = function(n, edges) {
    this.graph = {};

    // make graph;
    for(let i = 0; i < edges.length; i++) {
        const from = edges[i][0];
        const to = edges[i][1];
        const weight = edges[i][2];

        const neighbors = this.graph[from] || [];
        this.graph[from] = [...neighbors, [to, weight]];
    }
};

/** 
 * Time O(1) | Space O(1)
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
        const from = edge[0];
        const to = edge[1];
        const weight = edge[2];
        
       const neighbors = this.graph[from] || [];
       this.graph[from] = [...neighbors, [to, weight]];
};

/** 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    const mh = new MinHeap();
    const visited  = new Set();
    mh.insert([0, node1]);

    while(!mh.isEmpty()) {
        const currentNode = mh.extractMin();
        const from = currentNode[1];
        const totalWeightSoFar = currentNode[0];
        
        if(from === node2) return totalWeightSoFar;
        if(visited.has(from)) continue;
        visited.add(from);

        const neighbors = this.graph[from] || [];

        for(let i = 0; i < neighbors.length; i++) {
            const weight = neighbors[i][1];
            const to = neighbors[i][0];
            mh.insert([totalWeightSoFar+weight, to]);
        }
    }

    return -1;
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

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
