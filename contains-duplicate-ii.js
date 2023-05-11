/**
 * Linear Time
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    const numHash = {};

    for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(numHash[num] !== undefined) {
        if(Math.abs(i - numHash[num]) <= k) return true;
        numHash[num] = i;
      } else {
        numHash[num] = i;
      }
    }
    return false;
};