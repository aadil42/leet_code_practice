/**
 * DP | Recursion | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps
 * 
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    
    const cache = new Map();
    const mod = 10**9 + 7;
    const dfs = (index, leftSteps) => {
        
        const hash = `${index}-${leftSteps}`;
        if(cache.has(hash)) return cache.get(hash);

        if(index === 0 && leftSteps === 0) return 1;
        if(index === arrLen) return 0;
        if(index === -1) return 0;
        if(leftSteps === 0) return 0;

        const result = ((dfs(index-1, leftSteps-1)%mod) + (dfs(index, leftSteps-1)%mod) + (dfs(index+1, leftSteps-1)%mod)) % mod;
        cache.set(hash, result);
        return result;
    }

    return dfs(0, steps);
};