/**
 * Linear Iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/monotonic-array/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
    const isMonIncreasing = (nums) => {
        let i = 0;
        while(i+1 < nums.length) {
            if(nums[i] > nums[i+1]) return false;
            i++;
        }
        return true;
    }
    const isMonDecreasing = (nums) => {
        let i = 0;
        while(i+1 < nums.length) {
            if(nums[i] < nums[i+1]) return false;
            i++;
        }
        return true;
    }

    if(isMonIncreasing(nums)) return true;
    if(isMonDecreasing(nums)) return true;
    return false;
};