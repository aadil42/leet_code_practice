/**
 * 
 * Iterating
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank
 * 
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {

    let farLeft = n;
    let farRight = 0;

    for(let i = 0; i < Math.max(left.length, right.length); i++) {
        if(right[i] !== undefined) {
            farLeft = Math.min(farLeft, right[i]);
        }
        if(left[i] !== undefined) {
            farRight = Math.max(farRight, left[i]);
        }
    }

    if(!right.length) return farRight;
    if(!left.length) return n - farLeft;

    return Math.max(farRight, n - farLeft);
};


/**
 * Sorting 
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment1 = function(n, left, right) {

    left.sort((a,b) => {
        return a-b;
    });

    right.sort((a,b) => {
        return a-b;
    });

    if(!right.length) return left[left.length - 1];
    if(!left.length) return n - right[0];
    
    return Math.max(left[left.length - 1], n - right[0]);

};