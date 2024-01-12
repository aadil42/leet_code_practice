/**
 * iteration
 * Time O(n^2) | Space O(n^2);
 * https://leetcode.com/problems/transpose-matrix
 * 
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    // make it a square 
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    // fill the remaining rows
    if(ROWS < COLS) {
        for(let i = ROWS; i < COLS; i++) {
            matrix[i] = new Array(COLS).fill("#");
        }
    }    

    // fill the remaining cols
    if(COLS < ROWS) {
        for(let i = 0; i < ROWS;  i++) {
            for(let j = COLS; j < ROWS;  j++) {
                matrix[i][j] = "#";
            }
        }
    }

    const swap = (r1,c1,r2,c2) => {
        [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]];
    }

    let i = 0;
    // console.log(matrix);
    while(i < matrix.length) {
        let row = i+1;
        // let col = i+1;
        while(row < matrix.length) {
            swap(i, row, row, i);
            row++;
        }
        i++;
    }
    // console.log(matrix, 'after');
    return matrix.map((row) => {
        return row.filter((el) => el !== "#");
    }).filter((row) => row.length !== 0);
};