/**
 * Logarithmic time. 
 * Time O(N + N*long(N)) | Space O(1)
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimumDifference = function(nums, k) {

    if (k === 1) return 0;

    nums = nums.sort((a, b) => {
        return a - b;
    });

    let i = 0;
    let j = k - 1;
    let minDiffrence = Infinity;

    while (j < nums.length) {
        minDiffrence = Math.min(Math.abs(nums[i] - nums[j]), minDiffrence);
        j++;
        i++;
    }

    return minDiffrence;
};