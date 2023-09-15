/**
 * Kruskal's Algorithm (minimum spanning tree)
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/min-cost-to-connect-all-points
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    
  const edges = [];

  const calcManhattenDistance = (pointA, pointB) => {
      return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
  }

  for(let i = 0; i < points.length; i++) {
      for(let j = 0; j < points.length; j++) {
          if(i===j) continue;
          const distance = calcManhattenDistance(points[i], points[j]);
          edges.push([i,j, distance]);
      }
  }

  const kruskal = (edges) => {

      edges = edges.sort((a,b) => a[2] - b[2]);
      const rank = new Array(points.length).fill(1);
      const parent = [];
      let total = 0;


      for(let i = 0; i < points.length; i++) {
          parent.push(i);
      }

      const getParent = (point) => {
          while(parent[point] !== point) {
              point = parent[point];
          }
          return point;
      }
      
      const isCycle = (point1, point2) => {
          const point1Parent = getParent(point1);
          const point2Parent = getParent(point2);

          if(point1Parent === point2Parent) return true;
          
          if(rank[point1Parent] > rank[point2Parent]) {
              parent[point2Parent] = point1Parent;
              rank[point1Parent] += rank[point2Parent];
          }  else {
              parent[point1Parent] = point2Parent;
              rank[point2Parent] += rank[point1Parent];
          }

          return false;
      }

      for(let i = 0; i < edges.length; i++) {
          const [point1, point2, distance] = edges[i];
          // console.log(edges)
          if(!isCycle(point1, point2)) total += distance;
      }
      return total;
  }

  return kruskal(edges);
};

/**
 * 
 * Prim's Algorithm (minimum spaning tree)
 * Time O(n^2 * log(n)) | Space O(n^2)
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints1 = function(points) {

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