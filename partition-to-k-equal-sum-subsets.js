/**
 * Recursion/Backtracking
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {

    if(nums.reduce((pre, curr) => pre + curr, 0) % k) return false;
    
    const target = nums.reduce((pre, curr) => pre + curr, 0) / k;

    nums.sort((a,b) => b-a);

    const hash = new Set();

    function dfs(index, k, currSum) {
      if(k === 0) return true;
      if(currSum === target) return dfs(0, k-1, 0);

      for(let i = index; i < nums.length; i++) {
        if(hash.has(i) || nums[i] + currSum > target) continue;
        if(i > 0 && !hash.has(i-1) && nums[i] === nums[i-1]) continue;
        hash.add(i);
        if(dfs(i+1, k, currSum + nums[i])) {
          return true;
        }
        hash.delete(i);
      }
      return false;
    }

    return dfs(0, k, 0);
};