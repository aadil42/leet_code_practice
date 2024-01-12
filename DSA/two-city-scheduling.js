/**
 * 
 * Recursion,Memoization
 * 
 * Time O(n^2) | Space O(n^2);
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
    const cache = {};

    function dfs(i, countA, countB) {

        const hash = countA+'-'+countB;
        if(cache[hash]) return cache[hash];
        if(countA === 0 && countB === 0) return 0;
        if(countA < 0 || countB < 0) return Infinity;

        cache[hash] = Math.min(costs[i][0] + dfs(i+1, countA-1, countB),
        costs[i][1] + dfs(i+1, countA, countB-1));
        return cache[hash];
    }

    return dfs(0, costs.length/2,costs.length/2);
};

/**
 * 
 * Greedy 
 * Time O(n) | Space O(n)
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  
    const diffs = [];
  
    costs.forEach((cost) => {
        diffs.push([cost[0], cost[1], cost[1] - cost[0]]);
    });
  //   console.log(diffs);
  
    diffs.sort((diff1, diff2)  => {
        return diff1[2] - diff2[2];
    });
  
      console.log(diffs);
      let minCost = 0;
  
      for(let i = 0; i < diffs.length; i++) {
          if(i < diffs.length/2) {
              minCost += diffs[i][1];
          }
          if(i >= diffs.length/2) {
              minCost += diffs[i][0];
          }
      }
  
      return minCost;
  };