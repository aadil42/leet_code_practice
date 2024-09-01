/**
 * Array 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/convert-1d-array-into-2d-array
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    
    if(m*n !== original.length) return [];

    const twoDarray = [];
    original.reverse();

    while(original.length) {
        let cols = n;
        const row = [];
        while(cols) {
            row.push(original.pop());
            cols--;
        }
        twoDarray.push(row);
    }

    return twoDarray;
};