/**
 * 
 * DP | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/min-cost-climbing-stairs
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    const cache = new Map();
    const dfs = (index) => {
        if(cache.has(index)) return cache.get(index);
        if(index >= cost.length) return 0;

        const result = Math.min((cost[index] || 0) + dfs(index+1), (cost[index] || 0) + dfs(index+2));
        cache.set(index, result);
        return result;
    }

    return dfs(-1);
};

/**
 * Recursion
 * Time O(n) | Space O(n)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs1 = function(cost) {
    
    const memo = {
        [cost.length - 1]: cost[cost.length - 1]
    };
    function dfs(index) {
        if(memo[index]) return memo[index];
        if(index >= cost.length) return 0;
        const choice1 = dfs(index+1);
        const choice2 = dfs(index+2);
        memo[index] = cost[index] + Math.min(choice1, choice2);
        return memo[index];
    }
    // console.log(memo);
    // console.log(memo);
    return Math.min(dfs(0), dfs(1));
    // return dfs(0);
};