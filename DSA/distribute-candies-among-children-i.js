/**
 * DP | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/distribute-candies-among-children-i/
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    
    const cache = new Map();

const dfs = (total, level) => {
    const  hash = `${level}-${total}`;
    
    if(cache.has(hash)) return cache.get(hash);
    
    if(level === 3 && total === n) return 1;
    if(level === 3) return 0;
    
    let currentTotal = 0;
    for(let i = 0; i < limit + 1; i++) {
        currentTotal += dfs(total+i, level+1);
    }
    
    cache.set(hash, currentTotal);
    return currentTotal;
}

return dfs(0, 0);
};

