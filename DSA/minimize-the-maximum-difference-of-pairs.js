/**
 * 
 * Binary Search
 * https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs
 * 
 * Time O(n*log(n))  | Space O(1)
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {

    if(p === 0) return 0;
    // sort the array
    nums = nums.sort((a,b) => a - b);    
    const canMakePairs = (max) => {
      let pairs = 0;
      let i = 1;
      while(i < nums.length) {
        if(nums[i] - nums[i-1] <= max) {
          pairs += 1;
          i += 2;
        } else {
          i += 1;
        }
        if(pairs === p) return true;
      }
        return false;
    }

    let low = 0;
    let high = nums[nums.length - 1] - nums[0];

    while(low < high) {
      const mid = (low + high) >> 1;
      if(canMakePairs(mid)) {
          high = mid;
      } else {
          low = mid + 1;
      }
    } 
    return low;
};