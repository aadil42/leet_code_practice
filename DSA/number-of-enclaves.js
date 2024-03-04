/**
 * Approch:
 * 1. run dfs on every cell in grid. 
 * 2. if the return value is not -Infinity (meaning we don't go out of bound) then add the result other wise don't add it.
 * 
 * DFS 
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/number-of-enclaves/
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    
    const visited = new Set();
    const ROW = grid.length;
    const COL = grid[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const outOfBoundry = (r, c) => {

        if(r < 0 || r === ROW) return true;
        if(c < 0  || c === COL) return true;
        return false;
    }

    const dfs = (row, col) => {

        if(outOfBoundry(row, col)) return -Infinity;
        if(visited.has(`${row}-${col}`)) return 0;
        visited.add(`${row}-${col}`);
        
        if(grid[row][col] === 0) return 0;

        let totalLandCells = 1;

        for(let i = 0; i < directions.length; i++) {
            const nextRow = directions[i][0];
            const nextCol = directions[i][1];
            totalLandCells += dfs(row + nextRow, col + nextCol);
        }
        return totalLandCells;
    }

    let landCells = 0;

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(!visited.has(`${i}-${j}`)) {
                const result = dfs(i, j);
                landCells += (result !== -Infinity && result) || 0;
            }
        }
    }

    return landCells;
};