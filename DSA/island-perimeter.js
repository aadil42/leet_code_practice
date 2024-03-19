/**
 * Graph | DFS
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/island-perimeter/
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
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
    
    const visited = new Set();

    const dfs = (row, col) => {

        if(isOutOfBound(row, col)) return;
        if(grid[row][col] === 0) return;

        const cell = `${row}-${col}`;

        if(visited.has(cell)) return;
        visited.add(cell);

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            dfs(nextRow, nextCol);
        }
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j]) dfs(i,j);
        }
    }

    const numOfCells = [...visited];
    
    let perimiter = 0;
    // count the perimiter len
    for(let i = 0; i < numOfCells.length; i++) {
        let [row, col] = numOfCells[i].split("-");
        row = +row;
        col = +col;
        for(let j = 0; j < directions.length; j++) {
            const nextRow = row + directions[j][0];
            const nextCol = col + directions[j][1];
            if(isOutOfBound(nextRow, nextCol)) {
                perimiter++;
                continue;
            }
            if(grid[nextRow][nextCol] === 0) perimiter++;
        }
    }

    return perimiter;
};