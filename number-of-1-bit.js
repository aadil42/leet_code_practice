
/**
 * Bit manipulation
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    
    let result = 0;
    
    
    while(n > 0) {
        if(n%2) {
            result++;
        }    
        n = Math.floor(n/2);
    } 
    
    return result
};

/**
 * Bit manipulation
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let shift = 0;
    let ones = 0;
    while(shift < 32) {
        if((1 << shift) & n) ones++;
        shift++;
    }
    return ones;
};
