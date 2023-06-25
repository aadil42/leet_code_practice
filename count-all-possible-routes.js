/**
 * Recursion DP
 * https://leetcode.com/problems/count-all-possible-routes/
 * 
 * F = fule
 * Time O(n^2 * F) | Space O(n*F)
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    
    const cache = new Map();
    const mod = 1000000007;
    const dfs = (curr, remain) => {
        // console.log(curr, remain);
        if(remain < 0) return 0;
        const hash = `${curr}-${remain}`;

        if(cache.has(hash)) return cache.get(hash);

        let result = 0;

        if(curr === finish) result++;

        for(let i = 0; i < locations.length; i++) {
            if(i === curr) continue;
            const cost = Math.abs(locations[curr] - locations[i]);
            result += dfs(i, remain - cost);
            result %= mod;
        }
        cache.set(hash, result);
        // cache[hash] = result;
        return result;
    }

    return dfs(start, fuel);
};