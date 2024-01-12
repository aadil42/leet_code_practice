/**
 * Tabulation | DP
 * 
 * This will work.
 * Time O(n) | Space O(n);
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, diff) {
    const cache = {};
  
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        
        const preDiff = arr[i] - diff;
        if(cache[preDiff]) {
            cache[arr[i]] = 1 + cache[preDiff];
        } else {
            cache[arr[i]] = 1;
        }
        max = Math.max(max, cache[arr[i]]);
    }
  
    return max;
  }
  

/**
 * Recursion | memoization
 * getting MLE for this.
 * 
 * Time O(n) | Space O(n);
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

function longestSubsequence1(arr, diff) {
    const cache = new Map();
    
    function dfs(index, prev) {
    if (index === arr.length) return 0;
    const hash = `${index}-${prev}`;
    if(cache.has(hash)) return cache.get(hash);
  
    let choice = 0, nochoice = 0;
  
    if (prev === -1 || arr[index] - arr[prev] === diff) {
      choice = Math.max(1 + dfs(index + 1, index), dfs(index + 1, prev));
    } else {
      nochoice = dfs(index + 1, prev);
    }
    cache.set(hash, Math.max(choice, nochoice));
    return cache.get(hash);
  }
  
    return dfs(0, -1);
}