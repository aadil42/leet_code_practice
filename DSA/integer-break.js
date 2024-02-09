/**
 * DP | Memoization | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    // excepiton cases.
    if(n === 3) return 2;
    if(n === 2)  return 1;

    const cache = new Map();
    const dfs = (leftNum) => {

        if(cache.has(leftNum)) return cache.get(leftNum);
        if(leftNum === 0) return 1;

        let i = 1;
        let max = 0;
        while(i <= leftNum) {
            if(leftNum-i < 0) break;
            max = Math.max(max, i * dfs(leftNum-i));
            i++;
        }

        cache.set(leftNum, max);
        return max;
    }

    return dfs(n);
};

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak1 = function(n) {
    
    const dp = {};
    dp[1] = 1;
    function dfs(i) {
        // console.log(i);
        if(dp[i]) return dp[i];

        if(i === n) {
            dp[i] = 0;
        } else {
            dp[i] = i;
        }

        for(let k = 1; k < i; k++) {
            const val = dfs(k) * dfs(i-k);
            dp[i] = Math.max(dp[i], val);
        }
        return dp[i];
    }
    return dfs(n);
};