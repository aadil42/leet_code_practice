/**
 * DP | Recursion
 * time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/decode-ways/
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings1 = function(s) {
    
    const cache = {};
    const dfs = (index, code = true) => {
        const hash = `${index}-${code}`;

        if(cache[hash]) return cache[hash];
        if(+code > 26 || !code) return 0;
        if(code[0] === "0") return 0;
        if(index === s.length) return 1;

        const code1 = s[index];
        const code2 = (s[index+1] && (s[index] + s[index+1]))  || "";
        cache[hash] = dfs(index+1, code1) + dfs(index+2, code2);
        return cache[hash];
    }
    return dfs(0);
};

/**
 * DP | Recursion
 * time O(n) | Space O(n)
 * https://leetcode.com/problems/decode-ways/
 * 
 * @param {string} s
 * @return {number}
 */
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


//  this problem can be iritating to solve.
var numDecodingsR2 = function(s) {

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
     
     if(i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && '0123456'.includes(s[i + 1])))) {
         result += dfs(i+2);
         dp[i] = result;
     }
 
     return result;
 }
 
 return dfs(0);
 
 };