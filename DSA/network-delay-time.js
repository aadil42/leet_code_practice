/**
 * Dijkstra's algorithm | BFS
 * Time O(n*log(n)) | Space O(n^2)
 * https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {

  const createGraph = (edges) => {

      const graph = {};

      for(let i = 0; i < edges.length; i++) {
          const from = edges[i][0];
          const to = edges[i][1];
          const weight = edges[i][2];

          if(!graph[from]) {
              graph[from] = [];
          }

          graph[from].push([to, weight]);
      }

      return graph;
  }

  const graph = createGraph(times);

  const pq = new MinHeap();  
  pq.insert([0, k]);

  const visited = new Set();
  while(!pq.isEmpty()) {

      const [weight, node] = pq.extractMin();

      if(visited.has(node)) continue;
      visited.add(node);
      if(visited.size === n) return weight;

      const neighbors = graph[node] || [];
      for(let i = 0; i < neighbors.length; i++) {
          const nextNode = neighbors[i][0];
          const nextWeight = neighbors[i][1];
          // if(visited.has(nextNode)) continue; // saves us from cycles. If you add this line then visited nodes won't be added. 
          // Right now visited nodes are added but it's taken care of in the above visited.has(node) condition
          pq.insert([nextWeight+weight, nextNode]);
      }
  }
  return -1;
};

/**
 * Dijkstra's Algorithm
 * n = number of total  nodes
 * Time O(n) | Space O(edges)
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime1 = function(times, n, k) {
    
    const graph = {};
    const minNetworkHeap = new MinHeap();
    const visited = new Set();

    // make graph
    for(let i = 0; i < times.length; i++) {
      const sourceNode = times[i][0];
      const targetNode = times[i][1];
      const weight = times[i][2];

       if(graph[sourceNode]) {
           graph[sourceNode].push([weight,targetNode]);
       } else {
           graph[sourceNode] = [[weight,targetNode]];
       }
    }

    minNetworkHeap.insert([0,k]);
    let t = 0;
    while(!minNetworkHeap.isEmpty()) {
      const node = minNetworkHeap.extractMin();
      if(visited.has(node[1])) continue;
      visited.add(node[1]);

      t =  Math.max(t, node[0]);
      
      const neihbor = graph[node[1]];

      if(!neihbor) continue;
      for(let i = 0; i < neihbor.length; i++) {
        if(!visited.has(neihbor[i][1])){
            minNetworkHeap.insert([ node[0] + neihbor[i][0], neihbor[i][1] ]);
        };
      }
    }

    return visited.size === n ? t : -1;
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