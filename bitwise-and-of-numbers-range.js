/**
 * Bit manupilation
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 * 
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {

    let i = 0;
    while(left !== right) {
       left = left >> 1;
       right = right >> 1;
       i++;
    }

    return left << i;
};