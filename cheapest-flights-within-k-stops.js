/**
 * 
 * Dijkstra's Algorithm But it's not working for one specific test case
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice1 = function(n, flights, src, dst, k) {

    // make graph
    const graph = {};
    for(let i = 0; i < flights.length; i++) {
        const sourceNode = flights[i][0];
        const targetNode = flights[i][1];
        const cost = flights[i][2];

        if(graph[sourceNode]) {
            graph[sourceNode].push([targetNode, cost]);
        } else {
            graph[sourceNode] = [[targetNode, cost]];
        }
    }    

    const shortestPaths = {};
    for(let i = 0; i < n; i++) {
      shortestPaths[i] = Infinity;
    }
    shortestPaths[src] = 0;

    const flightsHeap = new MinHeap();
    flightsHeap.insert([0,0,src]);
    // const visited = new Set();

    while(!flightsHeap.isEmpty()) {
      const node = flightsHeap.extractMin();
      const kStops = node[1];
      const cost = node[0];
      const nextNode = node[2];
      // if(nextNode === dst) return cost;
      if(kStops > k) continue;

      // if(visited.has(nextNode)) continue;
      // visited.add(nextNode);

      const neighbor = graph[nextNode];
      // console.log(neighbor)
      if(!neighbor) continue;
      for(let i = 0; i < neighbor.length; i++) {
        const currentCost = neighbor[i][1];
        const totalCost = currentCost + cost;
        if(totalCost < shortestPaths[neighbor[i][0]] ) {
          shortestPaths[neighbor[i][0]] = totalCost;
          flightsHeap.insert([ totalCost, kStops+1, neighbor[i][0]]);
        }
      }
    }

    if(shortestPaths[dst] === Infinity) return -1;
    return shortestPaths[dst];
    // return -1;
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


/** Just recursion
 * Time O()
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 
var findCheapestPrice = function(n, flights, src, dst, k) {
    const reverseGraph = {};

  for(let i = 0; i < flights.length; i++) {

    const [source, target, weight] = flights[i];
    if(reverseGraph[target]) {
      reverseGraph[target].push([source, target, weight]);
    } else {
      reverseGraph[target] = [[source, target, weight]];
    }
  }

   let min = Infinity;
   function bfs(end, stops, total) {
     if(stops > k || total > min) return;

     if(end === src) {
       min = Math.min(min, total);
       return;
     }

     if(!reverseGraph[end]) return;

     // traverse the neibor node
     for(let i = 0; i < reverseGraph[end].length; i++) {
       const [source, target, weight] = reverseGraph[end][i];
       bfs(source, stops+1, total + weight);
     }
   }
   bfs(dst, -1, 0);
   return min === Infinity ? -1 : min;
}


/**
 * 
 * Bellmen-ford
 * E = total number of edges
 * Time O(n*k) | Space O(E)
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 
var findCheapestPrice2 = function(n, flights, src, dst, k) {
    let prices = Array(n).fill(Infinity);

    prices[src] = 0;
    for(let i = 0; i < k+1; i++) {
      const temp = [...prices];
      for(let j = 0; j < flights.length; j++) {
        const [start, end, weight] = flights[j];
        if(prices[start] === Infinity) continue;
        if(prices[start] + weight < temp[end]) {
          temp[end] = prices[start] + weight;
        }
      }
      prices = [...temp];
    }

    return prices[dst] === Infinity ? -1  : prices[dst];
};
