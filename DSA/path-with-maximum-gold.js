/**
 * Brute foce | DFS | Backtrack
 * Time O(n*m * 4^(n*m)) | Space O(n*m)
 * https://leetcode.com/problems/path-with-maximum-gold
 * @param {number[][]} grid
 * @return {number}
 */

var getMaximumGold = function(grid) {
    
    
    const ROW = grid.length;
    const COL = grid[0].length;

    const directions = [[1,0], [-1,0], [0,1],[0,-1]];

    const outOfBound = (row, col) => {
        if(row === ROW) return true;
        if(col === COL) return true;
        if(row < 0) return true;
        if(col < 0) return true;
        return false;
    }

    const dfs = (row, col, visited) => {

        if(outOfBound(row, col)) return 0;
        if(visited.has(`${row}-${col}`)) return 0;
        if(!grid[row][col]) return 0;

        visited.add(`${row}-${col}`);
        let maxGold = 0;

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];

            maxGold = Math.max(maxGold, grid[row][col] + dfs(nextRow, nextCol, visited));
        }
        visited.delete(`${row}-${col}`);
        return maxGold
    }   

    let maxGold = 0;

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j]) {
                maxGold = Math.max(maxGold, dfs(i,j, new Set));
            }
        }
    }

    return maxGold;
};
