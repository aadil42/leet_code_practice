/**
 * Binary Search
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let left = 1;
    let right = num;

    while(left <= right) {

        const mid = left + Math.floor((right-left)/2);

        if(mid*mid === num) return true;

        if(mid*mid > num) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }

    return false;
};

/**
 * Naive way.
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare2 = function(num) {
    if(Math.sqrt(num).toString().includes('.')) return false;
    return true;
};

/**
 * 
 * Binary Search
 * 
 * Time O(log(n)) | Space O(1)
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare1 = function(num) {
    let left = 1;
    let right = num;

    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(mid*mid > num) {
            right = mid -1;
        }else if(mid*mid < num) {
            left = mid +1;
        } else {
            return true;
        }
    }

    return false;
};