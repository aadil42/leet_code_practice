/**
 * DP | Recursion | Caching
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/perfect-squares/
 * 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    const cache = new Map();
    const dfs = (leftSquare) => {

        if(cache.has(leftSquare)) return cache.get(leftSquare);
        if(leftSquare === 0) return 0;
        if(leftSquare < 0) return Infinity;

        let i = 1;
        let  min = Infinity;
        while(i*i <= leftSquare) {
            min = Math.min(min, 1 + dfs(leftSquare - i*i));
            i++;
        }   

        cache.set(leftSquare, min);
        return min; 
    }

    return dfs(n);
};