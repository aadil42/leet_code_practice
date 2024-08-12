/**
 * Array | Hash
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/spiral-matrix-iii
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
    const twoDIdxs = new Set();

    let rowMax = Math.min(rows-1, rStart+1);
    let rowMin = Math.max(0, rStart-1);
    let colMax = Math.min(cols-1, cStart+1);
    let colMin = Math.max(0, cStart-1);

    let currRow = rStart;
    let currCol = cStart;

    twoDIdxs.add(`${currRow}-${currCol}`);
    while(twoDIdxs.size !== rows*cols) {
        
        // first go east
        while(currCol+1 <= colMax) {
            currCol += 1;
            twoDIdxs.add(`${currRow}-${currCol}`);
        }
        
        // then go south
        while(currRow+1 <= rowMax) {
            currRow += 1;
            twoDIdxs.add(`${currRow}-${currCol}`);
        }

        // then go west
        while(currCol-1 >= colMin) {
            currCol -= 1;
            twoDIdxs.add(`${currRow}-${currCol}`);
        }

        // finally go north
        while(currRow-1 >= rowMin) {
            currRow -= 1;
            twoDIdxs.add(`${currRow}-${currCol}`);
        }

        // update boundries
        colMax = Math.min(cols-1, colMax+1);
        rowMax = Math.min(rows-1, rowMax+1);
        colMin = Math.max(0, colMin-1);
        rowMin = Math.max(0, rowMin-1);
    }

    const ans = [...twoDIdxs].map((idx) => {
        return idx.split("-").map((num) => +num);
    });
    
    return ans;
};