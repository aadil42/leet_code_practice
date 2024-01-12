/**
 * 
 * DP | Recursion
 * https://leetcode.com/problems/tallest-billboard/
 * 
 * Time O(2^n) | Space O(2^n)
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {

    const cache = {};

    const dfs = (diff, i) => {
      if(i >= rods.length) {
        if(diff === 0) return 0;
        return -Infinity;
      };
    const hash = `${diff}-${i}`;
    if(cache[hash]) return cache[hash];

     const skipHeight = dfs(diff, i+1);
     const leftHeight =  rods[i] + dfs(diff + rods[i], i+1);
     const rightHeight = dfs(diff - rods[i], i+1);
  
     return cache[hash] =  Math.max(leftHeight, rightHeight, skipHeight);
    }
    return dfs(0,0);
};
