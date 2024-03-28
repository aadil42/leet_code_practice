/**
 * Hashing | Sliding Window
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    
    const frequencies = {};

    for(let i = 0;  i < nums.length; i++) {
        frequencies[nums[i]] = 0;
    }

    let left = 0;
    let right = 0;
    let maxLen = 0;

    while(right < nums.length) {
        const num = nums[right];
        while(frequencies[num] + 1 > k) {
            const leftNum = nums[left];
            frequencies[leftNum] -= 1;
            left++;
        }
        frequencies[num] += 1;
        right++;
        maxLen = Math.max(right-left, maxLen);
    }

    return maxLen;
};