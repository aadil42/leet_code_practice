/**
 * DFS
 * Time o(n^2) | Space O(n^2)
 * https://leetcode.com/problems/number-of-closed-islands/
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {

    const ROW = grid.length;
    const COL = grid[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // const visited = new Set();

    const outOfBound = (r, c) => {
        if(r < 0 || r === ROW) return true;
        if(c < 0 || c === COL) return true;
        return false;
    }

    const outerVisited = new Set();

    const dfs = (row, col, visited) => {

        if(outOfBound(row, col)) return false;
        if(visited.has(`${row}-${col}`)) return true;
        visited.add(`${row}-${col}`);
        outerVisited.add(`${row}-${col}`);
        
        if(grid[row][col] === 1) return true;

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            if(!dfs(nextRow, nextCol, visited)) return false;
        }
        return true;
    }

    let numberOfClosedIsland = 0;

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(!outerVisited.has(`${i}-${j}`) && grid[i][j] === 0) {
                const visited = new Set();
                if(dfs(i, j, visited)) numberOfClosedIsland++;
            }
        }
    }

    return numberOfClosedIsland;
};