/**
 * BFS | Dynamic-Programming
 * Time O(n) | Space O(n)
 * Main takeaway is to keep a distance array. And update each node with the smallest distance from src if possible.
 * Kind of like dynamic programing but with bfs instead of dfs.
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {

  const distance = new Array(n).fill(Infinity);

  const createGraph = (edges) => {

      const graph = {};

      for(let i = 0; i < edges.length; i++) {
          const from = edges[i][0];
          const to = edges[i][1];
          const price = edges[i][2];

          if(!graph[from]) {
              graph[from] = [];
          }

          graph[from].push([to, price]);
      }

      return graph;
  }

  const graph = createGraph(flights); 

  const q = [[0, src]];
  distance[src] = 0;
  k = k + 1;

  while(q.length && k) {
      
      const size = q.length;

      for(let i = 0;  i < size;  i++) {
          const node = q.shift();
          const airport = node[1];
          const price = node[0];
          const neighbors = graph[airport] || [];
          for(let j = 0; j < neighbors.length; j++) {
              const nextAirport = neighbors[j][0];
              const nextPrice = neighbors[j][1];
              if(distance[nextAirport] > nextPrice + price) {
                  distance[nextAirport] = price + nextPrice;
                  q.push([price + nextPrice, nextAirport]);
              }
          }
      }
      k--;
  }

  return distance[dst] === Infinity ? -1: distance[dst];
};

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
