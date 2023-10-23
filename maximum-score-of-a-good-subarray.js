/**
 * Greedy.
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/maximum-score-of-a-good-subarray
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {

    let maxScore = nums[k];
    let currentMin = maxScore;
    let left = k - 1;
    let right = k + 1;
    let len = 1;
    while(left > -1 || right < nums.length) {
        currentMin = Math.min(currentMin, Math.max(nums[left] || 0, nums[right] || 0));
        maxScore = Math.max(maxScore, currentMin*(len+1));
        if((nums[left] || 0) >= (nums[right] || 0)) {
            left--;
        } else {
            right++;
        }
        len++;
    }
    return maxScore;
}

/**
 * Brute force
 * Time O(n^3) | Space O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    
    let max = -Infinity;

    let i = 0;
    while(i < k+1) {
        let j = k;
        while(j < nums.length) {
            max = Math.max(max, Math.min(...nums.slice(i, j+1)) * (j - i + 1));
            j++;
        }
        i++;
    }

    return max;
};