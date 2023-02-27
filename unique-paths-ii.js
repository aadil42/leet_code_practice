/**
 * 
 * Recursion
 * Time O(n) | Space O(n).
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const ROW = obstacleGrid.length;
    const COL = obstacleGrid[0].length;
    // let totalUniquePath = 0;
    const cache = {};
    cache[(ROW - 1) + '-' +( COL - 1)] = 1;

    function dfs(row, col) {
        if(row === ROW || col === COL || obstacleGrid[row][col]) return 0;
        if(cache[row + '-' + col]) {
            return cache[(row) + '-' +(col)];
        }
       cache[(row) + '-' +(col)] =  dfs(row + 1, col) + dfs(row, col + 1);    
       return cache[(row) + '-' +(col)]
    }

    return dfs(0,0);
};