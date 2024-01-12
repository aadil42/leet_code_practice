/**
 * Array | Math
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    
    const gauessTotal =  (n) => {
        return (1+n)*(n/2);
    }

    let left = 0;
    let right = 0;
    let totalSubStrings = 0;
    while(right < nums.length) {
        while(nums[right] === 0) {
            right++;
        }
        totalSubStrings += gauessTotal(right-left);
        if(left===right) right++;
        left=right;
    }
    return totalSubStrings;
};