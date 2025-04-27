/**
 * Array 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] + nums[i+2] === nums[i+1]/2) count++;
    }
    return count;
};