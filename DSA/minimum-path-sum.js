/**
 * Recursion
 * Time O(n*m) | Space O(n*m)
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    const ROW = grid.length;
    const COL = grid[0].length;
    const cache = {};

    function dfs(i, j) {
        const key = i+'-'+j;
        if(cache[key]) return cache[key];
        if(i === ROW || j === COL) return Infinity;
        if(i === ROW - 1 && j === COL - 1) return grid[i][j];

        cache[key] = Math.min(dfs(i + 1, j) + grid[i][j], dfs(i, j + 1) + grid[i][j]);
        return cache[key];
    }

    return dfs(0,0);
};