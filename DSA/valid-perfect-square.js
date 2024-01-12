/**
 * Naive way.
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
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
var isPerfectSquare = function(num) {
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