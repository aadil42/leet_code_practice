/**
 * Brute Force | Sorting
 * Time O(n^2) | Space O(n^2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    
    const diffs = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            diffs.push(Math.abs(nums[i]-nums[j]));
        }
    }

    return diffs.sort((a,b) => a-b)[k-1];
};