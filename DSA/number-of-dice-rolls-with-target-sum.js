/**
 * DP | Caching
 * Time O(n*k*target) | Space O(n*k)
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 * 
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    
    const mod = 10**9 + 7;
    
    const cache = new Map();

    const dfs = (n, remaining) => {
        const hash = `${n}-${remaining}`;

        if(cache.has(hash)) return cache.get(hash);
        if(n === 0 && remaining === 0) return 1; 
        if(n === 0) return 0;
        
        let currentTotal = 0;
        // (k+1 - total)
        for(let i = 1; i < k+1; i++) {
            currentTotal = ( (dfs(n-1, remaining-i) % mod) + currentTotal ) % mod;
        }
        cache.set(hash, currentTotal % mod);
        return currentTotal%mod;
    }
    
    return dfs(n, target) % mod;
};

/**
 * Brute Force 
 * Time O(k^n) |  Space O(n)
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget1 = function(n, k, target) {
    
    const mod = 10**9 + 7
    const dfs = (n, total) => {
        if(n === 0 && total === target) return 1; 
        if(n === 0) return 0;
        
        let currentTotal = 0;
        for(let i = 1; i < k+1; i++) {
            currentTotal = ( (dfs(n-1, total+i) % mod) + currentTotal ) % mod;
        }
        return currentTotal % mod;
    }
    
    return dfs(n, 0) % mod;
};