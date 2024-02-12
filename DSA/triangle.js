/**
 * Recursion | DP | Caching
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    const outOfBound = (r,c) => {
        if(r === triangle.length || c === triangle[r].length) return true;
        return false;
    }

    const cache = new Map();

    const dfs = (r,c) => {

        const hash = `${r}-${c}`;

        if(cache.has(hash)) return cache.get(hash);

        if(outOfBound(r,c)) return 0;
        const result = Math.min(triangle[r][c] + dfs(r+1, c), triangle[r][c] + dfs(r+1, c+1));
        cache.set(hash, result);
        return result;
    }

    return dfs(0,0);
};

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal1 = function(triangle) {
    
    const dp = new Array(triangle[triangle.length - 1].length + 1).fill(0);
    
    for(let i = triangle.length - 1; i > -1; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    
    return dp[0];
    };