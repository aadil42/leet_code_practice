/**
 * DP | Recurison
 * Time O(n*m) | Space O(n) 
 * https://leetcode.com/problems/extra-characters-in-a-string
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
  return dfs(0, new Set(dictionary), s, new Map());
};

const dfs = (start, set, str, cache) => {

  if(cache.has(start)) return cache.get(start);
  if(start === str.length) return 0;

  let min = Infinity;
  for(let i = start; i < str.length; i++) {
      const subStr = str.slice(start, i+1);
      if(set.has(subStr)) {
          min = Math.min(min, dfs(i+1, set, str, cache));
      }
  }

  min = Math.min(min, dfs(start+1, set, str, cache) + 1);
  cache.set(start, min);
  return min;
}

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
var minExtraChar0 = function(s, dictionary) {

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

