/**
 * DP | Recursion | Caching
 * Time O(n*d*n) | Space O(n*d*n)
 * https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {

    const cache = new Map();
    const dfs = (i, left, currMax) => {

        const hash = `${i}-${left}-${currMax}`;
        if(cache.has(hash)) return cache.get(hash);
        if(left === 0 && i === jobDifficulty.length) return 0;
        if(left === 0) return Infinity;
        if(i === jobDifficulty.length) return Infinity;

        
        const result = Math.min(Math.max(currMax, jobDifficulty[i]) + dfs(i+1, left-1, 0), 
                        dfs(i+1, left, Math.max(currMax, jobDifficulty[i])));
        cache.set(hash, result);
        return result;
    }

    const result = dfs(0, d, 0); 
    return result ===  Infinity ? -1 : result;
};