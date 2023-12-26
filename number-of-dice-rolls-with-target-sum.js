/**
 * Brute Force 
 * Time O(k^n) |  Space O(n)
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    
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