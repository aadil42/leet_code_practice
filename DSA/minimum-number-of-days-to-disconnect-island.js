/**
 * Brute Force | Elimination by Deduction
 * Time O((n*m)^2) | Space O(n*m)
 * https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    // find out if answer is 1
    // find out if the answer is 0
    // the answer must be 2 then.

    // We would never have to remove more than 2 cell to disconnect the island. Think about a large square and think how can you partition so that you can have two seprate islands. What is the minimum removal?
    const ROW = grid.length;
    const COL = grid[0].length;
    const directions = [[1,0],[-1,0],[0,-1],[0,1]];

    const outOfBound = (r,c) => {
        if(r === ROW) return true;
        if(c === COL) return true;
        if(r < 0) return true;
        if(c < 0) return true;
        return false;
    }

    const numOfIsland = () => {
        
        const visited = new Set();

        let islands = 0;

        const dfs = (r,c) => {
            const hash =  `${r}-${c}`;
            if(outOfBound(r,c)) return;
            if(visited.has(hash)) return;
            if(!grid[r][c]) return;

            visited.add(hash);

            for(let i = 0; i < directions.length; i++) {
                const [row, col] = directions[i];
                const nextRow = row+r;
                const nextCol = col+c;
                dfs(nextRow, nextCol);
            }
        }

        for(let i = 0; i < ROW; i++) {
            for(let j = 0; j < COL; j++) {
                const hash = `${i}-${j}`;
                if(!visited.has(hash) && grid[i][j]) {
                    dfs(i,j);
                    islands++;
                }
            }
        }

        return islands;
    }

    const initialNumOfIslands = numOfIsland();
    if(initialNumOfIslands > 1) return 0;
    if(initialNumOfIslands === 0) return 0;

    // check if we can disconnect the islands by removing only one land cell
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j] === 1) {
                grid[i][j] = 0;
                const islands = numOfIsland(); 
                if(islands === 0 || islands > 1) return 1;
                grid[i][j] = 1;
            }
        }
    }

    return 2;
};