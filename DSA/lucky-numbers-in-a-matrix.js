/**
 * Hashing
 * Time O(n*m) | Space  O(n+m)
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/?envType=daily-question&envId=2024-07-19
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    
    const minInRows = {};
    const maxInCols = {};
    
    for(let i = 0; i < matrix.length; i++) {
        minInRows[i] = Math.min(...matrix[i]);
    }

    for(let i = 0; i < matrix[0].length; i++) {
        const col = matrix.map((row) => row[i]);
        maxInCols[i] = Math.max(...col);
    }
    
    const luckyNums = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            const num = matrix[i][j];
            if(minInRows[i] === num && maxInCols[j] === num) {
                luckyNums.push(num);
            }
        }
    }

    return luckyNums;
};