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

/**
 * Another approch
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave1 = function(s1, s2, s3) {
    
  if(s1.length + s2.length !== s3.length) return false;
  
  const cache = new Map();
  function dfs(i, j) {
      const key = i+'-'+j;
      if(cache.has(key)) return cache.get(key);
      if(i === s1.length && j === s2.length) return true;

      if(s1[i] === s3[i+j] && dfs(i+1, j)) return true;
      if(s2[j] === s3[i+j] && dfs(i, j+1)) return true;

      cache.set(key, false);
      return cache.get(key);
  }

  return dfs(0,0);
};