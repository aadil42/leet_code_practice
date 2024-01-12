/**
 * Recursion
 * 
 * Time O(n) | Space O(n)
 * 
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
   
    const cache = {};
    function dfs(l, r) {
        const key = l+"-"+r;
        if(cache[key]) return cache[key];
        if(l > r) return 0;
 
        const isEven = (r - l) % 2 ? true : false;
 
         let left = 0;
         let right = 0;
        if(isEven) {
              left = piles[l];
              right = piles[r];
        } 
 
        const max = Math.max(dfs(l + 1, r) + left, dfs(l, r - 1) + right);
        cache[key]  = max;
        return max;
    }
 
     return dfs(0, piles.length - 1) > piles.reduce((acc, curr) => acc + curr, 0) / 2;
 };