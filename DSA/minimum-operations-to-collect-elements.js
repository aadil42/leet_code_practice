/**
 * Hashing
 * Time O(n) | Space O(k)
 * https://leetcode.com/problems/minimum-operations-to-collect-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
    const numSet = new Set();
    for(let i = 1; i < k+1; i++) {
        numSet.add(i);
    }
    
    let minCount = 0;
    let right = nums.length - 1;
    
    while(numSet.size) {
        numSet.delete(nums[right]);
        minCount++;
        right--;
    }
    
    return minCount;
};