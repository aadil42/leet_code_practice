/**
 * DP | Recursion
 * https://leetcode.com/problems/extra-characters-in-a-string/
 * 
 * n = len of s, m = len of dictionary
 * Time O(n*m) | Space O(n)
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {

  const dictionarySet = new Set([...dictionary]);

  const cache = new Map();

  const dfs = (index) => {
      if(cache.has(index)) return cache.get(index);
      if(index === s.length) return 0;
      let res = Infinity;
      for(let i = index; i < s.length; i++) {
        if(dictionarySet.has(s.substring(index,i+1))) {
          res = Math.min(res, dfs(i+1));
        }
      }
      res = Math.min(res, dfs(index+1) + 1);// skipping char
      cache.set(index, res);
      return res;
  }

  return dfs(0);
};