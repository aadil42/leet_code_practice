/**
 * Binary Search
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * Time  O(log(m) + log(n)) == log(m*n) | Space O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let rowLen = matrix.length;
    let colLen = matrix[0].length;

    let topRow = 0;
    let bottomRow = rowLen - 1;

    // find target row;
    let targetRow;
    while(topRow <= bottomRow) {
        const mid = (topRow + bottomRow) >> 1;
        // if row is found.
        if(matrix[mid][0] <= target && matrix[mid][colLen - 1] >= target) {
            targetRow = mid;
            break;
        }

        
        if(matrix[mid][0] > target) {
            bottomRow = mid - 1;
        }
        if(matrix[mid][colLen - 1] < target) {
            topRow = mid + 1;
        }
    }

    if(targetRow === undefined) return false;

    // find the number in col
    let left = 0;
    let right = colLen - 1;

    while(left <= right) {
        const mid = (left + right) >> 1;
        
        if(matrix[targetRow][mid] === target) return true;
        if(matrix[targetRow][mid] > target) right = mid - 1;
        if(matrix[targetRow][mid] < target) left = mid + 1;
    }
    
    return false;
};