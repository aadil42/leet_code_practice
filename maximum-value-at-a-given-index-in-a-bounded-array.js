/**
 * Binary Search
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array
 * Time O(log(n)) | Space O(1)
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {

    const getSum = (val) => {
        // calc the left side
        let count = 0;
        
        if(val > index) {
            count += (val + (val - index)) * ((index + 1)/2);
        } else {
            const ones = (index + 1 - val);
            count += ones + (val + 1) *  (val)/2;
        }

        // for right
        if(val > n - index) {
            count += (val + (val - (n - 1 - index))) * (n-index)/2;
        } else {
            const ones = (n - index) - val;
            count += ones + (val + 1) * (val/2);
        }
        
        return count - val; // because we have counted val twice. remove it once so we can have it count only once.
    }

    let left = 1;
    let right = maxSum;
    while(left < right) {
        const mid = Math.floor((right + left + 1)/2);
        if(getSum(mid) <= maxSum) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};