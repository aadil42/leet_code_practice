/**
 * DP | Bottom up | Brute force
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition1 = function(obstacles) {
    
    const dp = Array(obstacles.length).fill(1);

    for(let i = 1; i < obstacles.length; i++) {
        for(let j = i-1; j > -1; j--) {
            if(obstacles[j] <= obstacles[i]) {
                dp[i] = Math.max(dp[j]+1, dp[i]);
            }
        }
    }

    return dp;
};

/**
 * DP | Brute Force | Recursion
 * Time O(n^3) | Space O(n^2)
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
 * 
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition2 = function(obstacles) {
    
    const cache = new Map();
    
    const dfs = (i, pre) => {
        const hash = `${i}-${pre}`;
        if(cache.has(hash)) return cache.get(hash);
        if(i === -1) return 0;
        if(obstacles[i] <= obstacles[pre]) {
            const result = Math.max(1+dfs(i-1, i), dfs(i-1, pre));
            cache.set(hash, result);
            return result;
        }
        const result = dfs(i-1, pre);
        cache.set(hash, result);
        return result;
    }

    const result = [];
    for(let i = obstacles.length - 1; i > -1; i--) {
        const ans = dfs(i-1, i);
        result.push(ans + 1);
    }

    return result.reverse();
};