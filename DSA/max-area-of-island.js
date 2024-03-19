/**
 * Graph | DFS
 * Time O(n*m) | Space O(1)
 * https://leetcode.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const ROW = grid.length;
    const COL = grid[0].length;

    const isOutOfBound = (row, col) => {
        if(row === ROW) return true;
        if(col === COL) return true;
        if(row < 0) return true;
        if(col < 0) return true;
        return false;
    }  

    const dfs = (row, col) => {
        if(isOutOfBound(row, col)) return 0;
        if(grid[row][col] === 0) return 0;
        grid[row][col] = 0;

        let currTotal = 1; // the cell is one.
        for(let i = 0; i < directions.length; i++) {
            
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];

            currTotal += dfs(nextRow, nextCol);
        }

        return currTotal;
    }

    let maxIslandArea = 0;

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j]) {
                maxIslandArea = Math.max(maxIslandArea, dfs(i,j));
            }
        }
    }

    return maxIslandArea;
};

/** DFS
 * Time O(n*m) || Space O(1);
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland1 = function(grid) {
    const row = grid.length;
    const column = grid[0].length;
    let maxArea = 0;
    let currentArea = 0;
    for(let i = 0; i < row;  i++) {
        for(let j = 0; j < column; j++) {
            dfs(i,j);
            maxArea = Math.max(maxArea,currentArea);
            currentArea = 0;
        }
    }

    // don't declare currentArea var inside dfs!! make it global.
    function dfs(r,c) {
        
        if(
            r === row ||
            r < 0 || 
            c === column ||
            c < 0 ||
            grid[r][c] === 0
        ) return 0;

        currentArea++;
        grid[r][c] = 0;
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r,c+1);
        dfs(r,c-1);
    }
    return maxArea;
};