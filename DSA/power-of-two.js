/**
 * 
 * Time O(log(n)) | Space O(1);
 * https://leetcode.com/problems/power-of-two/
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n < 1) return false;
    
    while(!(n%2)) {
        n /= 2;
    }

    return n === 1;
};

/**
 * Time O(log(n)) | Space O(1)
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo1 = function(n) {
    
    let i = 0;

    while(2**i < n) {
        i++;
    }

    return 2**i === n;
};