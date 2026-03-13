var numIslands = function(grid) {
    
    let totalIsland = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                totalIsland++;
                dfs(i,j);
            }
        }
    }


    function dfs(row,column) {
        grid[row][column] = '0';

        if(row + 1 < grid.length && grid[row + 1][column] == "1") {
            dfs(row+1, column);
        }
        if(row - 1 >= 0 && grid[row - 1][column] == "1") {
            dfs(row-1, column);
        }

        if(column + 1 < grid[0].length && grid[row][column + 1] == "1") {
            dfs(row, column + 1);
        }

        if(column - 1 >= 0 && grid[row][column - 1] == "1") {
            dfs(row,column-1);
        }

        return;
    }

    return totalIsland;
};

/**
 * DFS | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/number-of-islands/submissions/1946928071/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands0 = function(grid) {
    
    const ROW = grid.length;
    const COL = grid[0].length;

    const visited = new Set();
    
    const outOfBound = (r, c) => {

        if (r === ROW) return true;
        if (c === COL) return true;
        if (r < 0) return true;
        if (c < 0) return true;
        return false;
    }
    
    const dfs = (r, c) => {
        
        const hash = `${r}-${c}`;
        if (outOfBound(r, c)) return;
        if (visited.has(hash)) return;
        if (grid[r][c] === "0") return;

        visited.add(hash);

        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }

    let count = 0;
    
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            const hash = `${r}-${c}`;
            if (grid[r][c] === "1" && !visited.has(hash)) {
                dfs(r, c);
                count++;
            }
        }
    }

    return count;
};