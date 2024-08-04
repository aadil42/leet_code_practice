/**
 * Brute Force | Sorting 
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    
    const nSquaredArr = [];
    const mod = 10**9 + 7;
    for(let i = 0; i < nums.length; i++) {
        let total = nums[i];
        nSquaredArr.push(total);
        for(let j = i+1; j < nums.length; j++) {
            total += nums[j];
            nSquaredArr.push(total);
        }
    }

    nSquaredArr.sort((a,b) => a-b);
    
    return nSquaredArr.slice(left-1, right).reduce((acc, curr) => {
        return (acc+curr)%mod;
    }, 0);
};