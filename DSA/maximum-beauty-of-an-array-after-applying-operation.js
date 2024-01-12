/**
 * 
 * Sliding Window
 * https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);
  
    let left = 0;
    let right = 0;
    
    let max = 0;
    while(right < nums.length) {
        while(nums[right] - nums[left] > 2*k) left++;
        max = Math.max(max, right - left + 1); // +1 because it's 0 based
        right++;
    }
  
    return max;
  };