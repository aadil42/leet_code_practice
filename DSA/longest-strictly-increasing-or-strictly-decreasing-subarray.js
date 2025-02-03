/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, longestIncreasing(nums, i));
    }

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, longestDecreasing(nums, i));
    }

    return max;
};

longestIncreasing = (arr, start) => {

    let count = 1;
    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] <= arr[i-1]) return count;
        count++;
    }

    return count;
}

longestDecreasing = (arr, start) => {

    let count = 1;
    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] >= arr[i-1]) return count;
        count++;
    }

    return count;
}