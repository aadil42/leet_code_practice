/**
 * Hashing (Hashmap)
 * Time O(n*m) | Space O(n+m);
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column
 * 
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    
    const zeroHashRow = {};
    const oneHashRow  = {};
    const zeroHashCol = {};
    const oneHashCol = {};


    let ROW = grid.length;
    let COL = grid[0].length;

    // populate Rows
    for(let i = 0; i < ROW; i++) {
        oneHashRow[i] = 0;
        zeroHashRow[i] = 0;
    }
    // populate Cols
    for(let j = 0; j < COL; j++) {
        oneHashCol[j] = 0;
        zeroHashCol[j] = 0;
    }

    // populate hashmap
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j] === 1) {
                oneHashRow[i] = (oneHashRow[i] && oneHashRow[i] + 1) || 1;
                oneHashCol[j] = (oneHashCol[j] && oneHashCol[j] + 1) || 1;
            }        
            if(grid[i][j] === 0) {
                zeroHashRow[i] = (zeroHashRow[i] && zeroHashRow[i] + 1) || 1;
                zeroHashCol[j] = (zeroHashCol[j] && zeroHashCol[j] + 1) || 1;
            }
        }
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            grid[i][j] = oneHashRow[i] + oneHashCol[j] - zeroHashRow[i] - zeroHashCol[j]
        }
    }

    return grid;
};