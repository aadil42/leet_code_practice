/**
 * Recursion
 * 
 * Time O(n*m) | Space O(n*m)
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    
    const cache = new Map();
    function dfs(i,j) {
        const key = i+"-"+j;
        if(j === t.length) return 1;
        if(i === s.length) return 0;
        if(cache.has(key)) return cache.get(key);

        if(s[i] === t[j]) {
          const total = dfs(i + 1, j + 1) + dfs(i + 1, j);
            cache.set(key, total);
        } else {
            const total = dfs(i + 1, j);
            cache.set(key, total);
        }
        return cache.get(key);
    }

    return dfs(0,0);
};