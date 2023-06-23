/**
 * DP | Tabulation
 * 
 * https://leetcode.com/problems/longest-arithmetic-subsequence
 * Time O(n^2) | Space O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {

    if(nums.length  < 3) return 2;
    const dp = [];
    for(let i = 0; i < nums.length;  i++) {
      dp.push({0: 1});
    }
    let max = 0;
    for(let i = 1; i < nums.length; i++) {
      const numsi = nums[i];
      const dpi = dp[i];
      for(let  j = 0; j  < i; j++) {
        const dpj = dp[j];
        const diff = numsi - nums[j];
        if(dpj[diff]) {
          dpi[diff] = 1 + dpj[diff];
          max = Math.max(max, dpi[diff]);
        } else {
          dpi[diff] = 2;
          max = Math.max(max, dpi[diff]);
        }
      }
    }
  
    return max;
  };

  

/**
 * Recursion | Brute force
 * Time O(n^2 * 2^n) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {

    const dfs = (curr, next, step) => {
     if(next >= nums.length) return 0;
     if(nums[next] - nums[curr] === step) {
       return 1 + dfs(next, next+1, step);
     } else {
       return dfs(curr, next+1, step);
     }
    }  


    let max = 0;
    for(let i = 0; i < nums.length - 1; i++) {
      for(let j = i+1; j < nums.length; j++) {
        const step = nums[j] - nums[i];
        const curr = j;
        const next = j+1;
        max = Math.max(2 + dfs(curr, next, step), max);
      }
    }

    return max;
};

