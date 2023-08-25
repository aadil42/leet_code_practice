/**
 * https://leetcode.com/problems/interleaving-string/
 * Recursion | DP
 * 
 * Time O(m*n) | Space O(m*n)
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
    const cache = new Map();
    const dfs = (index1, index2, index3, currentStr) => {
      const hash = `${index1}-${index2}`;
      if(cache.has(hash)) return cache.get(hash);
      if(index1 === s1.length && index2 === s2.length) {
        return currentStr === s3;
      }
      if(s1[index1] && s3[index3] && s1[index1] === s3[index3]) {
        if(dfs(index1+1, index2, index3+1, currentStr + s1[index1])) return true;
      }

      if(s2[index2] && s3[index3] && s2[index2] === s3[index3]) {
        if(dfs(index1, index2+1, index3+1, currentStr + s2[index2])) return true;
      }
  
      cache.set(hash, false);
      return false;
    }

    return dfs(0,0,0,'');
};