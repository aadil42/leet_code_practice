var numDecodings = function(s) {

    const dp = {
        [s.length] : 1
    }
    
    function dfs(i) {
        if(dp[i]) {
            return dp[i];
        }
        
        if(s[i] === '0') {
            return 0;
        }
        
        let result = dfs(i + 1);
        
        if(i + 1 < s.length && ( s[i] === '1' || s[i] === '2' && '0123456'.includes(s[i+1]) ) ) {
                             result += dfs(i + 2);
                                dp[i] = result;
        }
    
        return result;
    }

    return dfs(0);
};