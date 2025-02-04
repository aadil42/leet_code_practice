/**
 * Brute Force 
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/maximum-ascending-subarray-sum
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, getSumOfIncreasingSubArray(i, nums));
    }
    return max;
};

const getSumOfIncreasingSubArray = (start, arr) => {

    let sum = arr[start];
    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] <= arr[i-1]) return sum;

        sum += arr[i];
    }

    return sum;
}