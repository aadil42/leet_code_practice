/**
 * Sliding Window | Two Pointer
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * 
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {

    let left = 0;
    let maxLen = 0;
    let currSum = 0;
    const n = nums.length;
    const target = nums.reduce((acc,num) => acc+num, 0) - x;
    console.log(target);
    if(target === 0) return n; // importatnt when you need to remove all the element.

    for(let right = 0; right < nums.length; right++) {
        currSum += nums[right];
        while(left < right && currSum > target) {
            currSum -= nums[left];
            left++;
        }
        if(currSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }
    return maxLen !== 0 ? n - maxLen : -1;
};

/**
 * Brute Force | Recrusion
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

var minOperations1 = function(nums, x) {
    const dfs = (left, right, remaining, steps) => {
        if(remaining === 0) return steps;
        if(remaining < 0) return Infinity;
        if(left > right) return Infinity;

        return Math.min(dfs(left+1, right, remaining - nums[left], steps+1),
                        dfs(left, right-1, remaining - nums[right], steps+1));
    }

    const result = dfs(0, nums.length - 1, x, 0);
    if(result !== Infinity) return result;
    return -1;
};