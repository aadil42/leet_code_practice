/**
 * Graph | DFS
 * time O(n*m) | Space O(1)
 * https://leetcode.com/problems/count-sub-islands/
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const ROW = grid1.length;
    const COL = grid1[0].length;

    const isOutOfBound = (row, col) => {
        if(row === ROW || col === COL) return true;
        if(row < 0 || col < 0) return true;
        return false;
    }

   const dfs = (row, col) => {

        if(isOutOfBound(row, col)) return true;
        if(grid2[row][col] === 0) return true;

        grid2[row][col] = 0;
        let result = true;

        if(grid1[row][col] ===  0) {
            result = false;
        }

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            const subResult = dfs(nextRow, nextCol);
            result = result && subResult;
        }

        return result;
   }

    let subIslands = 0;
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid2[i][j] === 1 && dfs(i,j)) {
                subIslands++;
            }
        }
    }
    return subIslands;
};

/**
 * DFS Traversal
 * Time O(m*n) | Space O(1)
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands2 = function(grid1, grid2) {
    
    let subIslandCount = 0;
    const ROW = grid1.length;
    const COL = grid1[0].length;
    
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid2[i][j]) {
                if(isSubIsland(i,j)) {
                    subIslandCount++;
                }
            }
        }
    }

    function isSubIsland(r,c) {
        // if out of bounds
        if(r === ROW || r < 0) return true;
        if(c === COL || c < 0) return true;
        if(grid2[r][c] === 0) return true;
        
        let result = true;
        if(grid1[r][c] === 0) {
            result = false;
        }
        grid2[r][c] = 0;
        result = isSubIsland(r+1,c) && result;
        result = isSubIsland(r-1,c) && result;
        result = isSubIsland(r,c+1) && result;
        result = isSubIsland(r,c-1) && result;
        return result;
    }

    return subIslandCount;
};


/**
 * Brute Force | DFS
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/count-sub-islands/
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands3 = function(grid1, grid2) {
    
    const ROW = grid1.length;
    const COL = grid1[0].length;

    const outOfBound = (row, col) => {
        if(row < 0) return true;
        if(row === ROW) return true;
        if(col < 0) return true;
        if(col === COL) return true;
        return false;
    }
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const visited = new Set();

    const check = (r,c) => {

        let isSubGraph = true;

        const dfs = (r,c) => {
            if(outOfBound(r,c)) return true;
            if(!grid1[r][c] && grid2[r][c]) {
                isSubGraph = false;
            }
            if(!grid2[r][c]) return true;

            const hash = `${r}-${c}`;
            if(visited.has(hash)) return true;
            visited.add(hash);

            for(let i  = 0; i < directions.length;  i++) {
                const [row, col] = directions[i];
                const nextRow = r+row;
                const nextCol = c+col;
                dfs(nextRow, nextCol);
            }

            return true;
        }

        dfs(r,c);
        return isSubGraph;
    }

    let count = 0;
    for(let i = 0; i < ROW;  i++) {
        for(let j = 0; j < COL; j++) {
            if(grid2[i][j] && !visited.has(`${i}-${j}`) && check(i,j)) count++;
        }
    }

    return count;
};