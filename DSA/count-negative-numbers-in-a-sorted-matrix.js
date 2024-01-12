/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix
 * Time O(m+n) | Space O(1)
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let row = grid.length;
    let col = grid[0].length;
    let colStart = 0;
    let total = 0;
    for(let i = row - 1; i > -1; i--) {
        for(let j = colStart; j < col; j++) {
            if(grid[i][j] < 0) {
                total += col - j;
                colStart = j;
                break;
            }
        }
    }
    return total;
};

/**
 * brute force
 * Time O(m*n) | Space O(1)
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives1 = function(grid) {

    const row = grid.length;
    const col = grid[0].length;

    let total = 0;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] < 0) total++;
        }
    }

    return total;
};


