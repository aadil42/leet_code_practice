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