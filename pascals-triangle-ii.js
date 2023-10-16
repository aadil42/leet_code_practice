/**
 * Iteration
 * Time O(n^2) | Space O(n) 
 * https://leetcode.com/problems/pascals-triangle-ii/
 * 
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    let row = [];
    let index = 0;

    while(index < rowIndex+1) {
        const currentRow = [...row];
        for(let i = 0; i < row.length + 1; i++) {
            const left = row[i-1] || 0;
            const right = row[i] || 0;
            currentRow[i] = left+right || 1;
        }
        row = currentRow;
        index++;
    }

    return row;
};