/**
 * 
 * DP | Recursion | Memoization
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 * Time O(n^2) | Space O(n^2)
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {

    // sorting
    pairs.sort((a,b) => {
      // if(a[0] === b[0]) {
      //   return a[1] - b[1];
      // }
      return a[0] - b[0];
    });
  
    const cache = new Map();
    const dfs = (index, pre) =>  {
      
      const hash = `${index}-${pre}`;
      if(cache.has(hash)) return cache.get(hash);
      if(index >= pairs.length) return 0;
      
      let choice1 = -Infinity;
      let choice2 = -Infinity;
  
      if(pairs[index][0] > pre) {
        // we have two choices
        choice1 = Math.max(dfs(index+1, pairs[index][1]) + 1, dfs(index+1, pre));
      } else {
        // we only have one choice
        choice2 = dfs(index+1, pre);
      }
        cache.set(hash, Math.max(choice1, choice2));
        return Math.max(choice1, choice2)
    }
  
    return dfs(0, -Infinity);
  };