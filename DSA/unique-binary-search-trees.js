/**
 * DFS | DP | Recursion | Tree
 * Time O(n^2) | Space O(n) | n^2 because of the inner loop which runs from 0 to n on each call.
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const cache = {};

    const dfs = (n) => {
        if(n <= 1) return 1;
        if(cache[n]) return cache[n];

        let total = 0;
        for(let i = 0; i < n; i++) {
            total += dfs(i) * dfs(n-1-i);
        }

        cache[n] = total;
        return total;
    }

    return dfs(n);
};

/**
 * recursion
 * Time O(n^2) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var numTrees0 = function(n) {
    

    function countRecursion(n,map) {
        if(n in map) {
            return map[n];
        }
        if(n <= 1) return 1;
        let total = 0;
        for(let i = 1; i <= n; i++) {
            total += countRecursion(i-1,map) * countRecursion(n-i,map);
        }
        map[n] = total;
        return total;
    }

    return countRecursion(n,{});
};