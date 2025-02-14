/**
 * Sliding Window 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    const total = nums.reduce((acc, num) => acc+num, 0); 
    if (total < target) return 0;
    if (total === target) return nums.length;

    let left = 0;
    let right = 0;
    let currSum = 0;
    let min = Infinity;

    while (right < nums.length) {
        
        currSum += nums[right];

        while (left <= right && currSum >= target) {
            min = Math.min(min, right - left + 1);
            currSum -= nums[left];
            left++;
        }

        right++;
    }

    return min;
};