/**
 * dfs
 * https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
 * 
 * Time O(n*m) | Space O(n*m)
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    const visited = {}
    const mod = 10**9  + 7;

    const dfs = (row, col, pre) => {
        if(row === ROWS || 
           col === COLS || 
           row < 0 || 
           col < 0 || 
           grid[row][col] <= pre) return 0;

        if(visited[`${row}-${col}`]) return visited[`${row}-${col}`];

           let total = 1;
           visited[`${row}-${col}`] = total;
           for(let i = 0; i < directions.length; i++) {
                total += dfs(row + directions[i][0], col + directions[i][1], grid[row][col]) % mod;
           }
           visited[`${row}-${col}`] = total;
           return total;
    }

    let totalIncreasingPaths = 0;
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            totalIncreasingPaths += dfs(i,j, -1);
            totalIncreasingPaths = totalIncreasingPaths % mod;
        }
    }

    return totalIncreasingPaths % mod;
};