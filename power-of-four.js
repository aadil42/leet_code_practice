/**
 * Iteration.
 * Time O(log(n)) | Space O(1);
 * https://leetcode.com/problems/power-of-four/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    if(n === 1) return true;
    
    while(n >= 4) {
        if(n === 4) return true;
        n /= 4;
    }

    return false;
};