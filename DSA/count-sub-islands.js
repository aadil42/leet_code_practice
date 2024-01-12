/**
 * DFS Traversal
 * Time O(m*n) | Space O(1)
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    
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