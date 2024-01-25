/**
 * DP | Recursion | Caching
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    const cache = new Map();

    const dfs = (i1, i2) => {

        const hash = `${i1}-${i2}`;
        
        if(cache.has(hash)) return cache.get(hash);
        
        if(i1  === text1.length || i2 === text2.length) return 0;

        let result = 0;

        if(text1[i1] === text2[i2]) {
            result = 1 + dfs(i1+1, i2+1);
        }
        result = Math.max(result, dfs(i1+1, i2+1));
        result = Math.max(result, dfs(i1+1, i2));
        result = Math.max(result, dfs(i1, i2+1));

        cache.set(hash, result);
        return result;
    }

    return dfs(0,0);
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence1 = function(text1, text2) {
    const row = text1.length + 1;
    const column = text2.length + 1;

    DP = new Array(row).fill(0).map((_) => new Array(column).fill(0));

    for(let i = row - 2; i > -1; i--) {
        for(let j = column - 2; j > -1; j--) {
            if(text1[i] === text2[j]) {
                DP[i][j] = 1 + DP[i + 1][j + 1];    
            } else {
                DP[i][j] = Math.max(DP[i + 1][j], DP[i][j + 1]);
            }
        }
    }
    return DP[0][0];
};




console.log(longestCommonSubsequence('abcba','abcbcba'));
