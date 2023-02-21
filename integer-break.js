/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
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