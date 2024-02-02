/**
 * DP | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/stone-game-iii/
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    
    const cache = new Map();

    const dfs = (i) => {
        if(cache.has(i)) return cache.get(i);
        if(i >= stoneValue.length) return 0;

        let max = 0;
        max = Math.max(stoneValue[i] - dfs(i+1));
        max = Math.max( (stoneValue[i] + (stoneValue[i+1] || 0))  - dfs(i+2), max);
        max = Math.max( (stoneValue[i] + (stoneValue[i+1] || 0) + (stoneValue[i+2] || 0)) - dfs(i+3), max);

        cache.set(i, max);
        return max;
    }

    const result = dfs(0);
    if(result < 0) return "Bob";
    if(result > 0) return "Alice";
    return "Tie";
};