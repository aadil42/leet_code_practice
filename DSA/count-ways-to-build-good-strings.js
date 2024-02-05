/**
 * DP | Recursion | Caching
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/count-ways-to-build-good-strings/
 * 
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    
    const isInBound = (len) =>  {
        return (len >= low && len <= high);
    }

    const mod = 10**9 + 7;
    const cache = new Map();

    const dfs = (len) => {

        if(cache.has(len)) return cache.get(len);
        if(len > high) return 0;

        let total = 0;
        total += (((isInBound(len + zero) && 1) || 0) + dfs(len+zero) % mod);
        total += (((isInBound(len + one) && 1) || 0) + dfs(len+one) % mod);

        cache.set(len, total);
        return total % mod;
    }

    return dfs(0) % mod;
};