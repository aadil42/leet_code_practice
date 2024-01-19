/**
 * DP | Recursion | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/minimum-falling-path-sum/
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    const cache = new Map();
    const n = matrix.length;

    const dfs = (r,c) => {

        const hash = `${r}-${c}`;
        if(cache.has(hash)) return cache.get(hash);

        if(c === n || c < 0) return Infinity;
        if(r === n) return 0;
        
        const result = Math.min(
                                matrix[r][c] + dfs(r+1, c-1), 
                                matrix[r][c] + dfs(r+1, c),
                                matrix[r][c] + dfs(r+1, c+1)  
                              );
        cache.set(hash, result);
        return result;
    }

    let minFallingSum = Infinity;
    for(let i = 0; i < n; i++) {
        // console.log(dfs(0, i));
        minFallingSum = Math.min(minFallingSum, dfs(0, i));
    }

    return minFallingSum;
};