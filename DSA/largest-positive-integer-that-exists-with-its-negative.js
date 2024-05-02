/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    const negetiveHash = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) negetiveHash.add(nums[i]);
    }

    let maxPositive = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0 && nums[i] > maxPositive && negetiveHash.has(-1*nums[i])) {
            maxPositive = nums[i];
        }
    }

    return maxPositive;
};