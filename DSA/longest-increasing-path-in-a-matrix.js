/**
 * Recursion
 * 
 * Time O(n*m) | Space O(n*m)
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    
    const ROW = matrix.length;
    const COL = matrix[0].length;
    const cache = {};

    function dfs(r,c,pre) {
        const key = r+'-'+c;
        if(r === ROW || c === COL || r < 0 || c < 0) return 0;
        if(pre >= matrix[r][c]) return 0;
        if(cache[key]) return cache[key];


        let res = 1;
        res = Math.max(dfs(r+1, c, matrix[r][c]) + 1, res);
        res = Math.max(dfs(r-1, c, matrix[r][c]) + 1, res);
        res = Math.max(dfs(r, c+1, matrix[r][c]) + 1, res);
        res = Math.max(dfs(r, c-1, matrix[r][c]) + 1, res);

        cache[key] = res;
        return res;
    }

    let max = 0;
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            max = Math.max(dfs(i,j,-1), max);
        }
    }
    return max;
};