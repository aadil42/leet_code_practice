/**
 * Greedy 
 * Time O(n*m) | Space O(n*m);
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    
    const matrix = [];
    for(let i = 0; i < rowSum.length; i++) {
        const row = [];
        for(let j = 0; j < colSum.length; j++) {
            row.push(null);
        }
        matrix.push(row);
    }

    for(let r = rowSum.length-1; r > -1; r--) {
        for(let c = colSum.length-1; c > -1; c--) {
            const num = Math.min(rowSum[r], colSum[c]);
            matrix[r][c] = num;
            rowSum[r] -= num;
            colSum[c] -= num;
        }
    }

    return matrix;
};