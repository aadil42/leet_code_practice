/**
 * Time O(n*m) | Space O(n*m)
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.prefixMatrix  = [];
    this.matrix = matrix;
    const ROW = matrix.length;
    const COL =  matrix[0].length;

    for(let i = 0; i < ROW; i++) {
        const prefixRow = [];
        for(let j = 0; j < COL; j++) {
            const prefix = prefixRow[j-1] || 0;
            prefixRow.push(prefix+matrix[i][j]);
        }
        this.prefixMatrix.push(prefixRow);
    }

};

/** 
 * Prefix Sum
 * Time O(n+m) | Space O(1); | | This function will be called for 10^4 times(so you should multiply the time complexity with this nummber (10^4))
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
    let total = 0;
    for(let i = row1; i < row2 + 1; i++) {
        total += this.prefixMatrix[i][col2] - (this.prefixMatrix[i][col1-1] || 0);
    }
    return total;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 * 
 * @param {number[][]} matrix
 */
 var NumMatrix1 = function(matrix) {
    this.matrix = matrix;
};

/** 
 * Brute Force
 * m = row2 - row1; n = col2 - col1
 * Time O(m*n) | Space O(1) | This function will be called for 10^4 times(so you should multiply the time complexity with this nummber (10^4))
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix1.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for(let i = row1; i < row2 + 1; i++) {
        for(let j = col1; j < col2 + 1; j++) {
            sum += this.matrix[i][j];
        }
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */