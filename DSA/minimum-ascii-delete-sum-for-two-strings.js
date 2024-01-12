/**
 * DP | Recursion
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
 * 
 * Time O(n^2) | Space O(n^2)
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(str1, str2) {

    const cache = {}
    const dfs = (i, j) => {
        const hash = `${i}-${j}`;
        if(cache[hash]) return cache[hash];
        if(i >= str1.length && j >= str2.length) return 0;
        if(i >= str1.length) return str2[j].charCodeAt(0) + dfs(i, j+1);
        if(j >= str2.length)  return str1[i].charCodeAt(0) + dfs(i+1, j);
        if(str1[i] === str2[j]) return dfs(i+1,j+1);
        return cache[hash] =  Math.min(str1[i].charCodeAt(0) + dfs(i+1,j), str2[j].charCodeAt(0) + dfs(i, j+1));
    }
   
    return dfs(0,0);
};