/**
 * DP | Memoization | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/decode-ways/
 * 
 * Most simple and readable code from all the given solution in this file.
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    const cache = new Map();

    const dfs = (i) => {

        if(cache.has(i)) return cache.get(i);

        if(i === s.length) return 1;
        if(i > s.length) return 0;

        let total = 0;
        const oneDigitNum = +s.slice(i, i+1);
        if(oneDigitNum !== 0) {
            total += dfs(i+1);
        }
        const twoDigitNum = s.slice(i, i+2);
        if(twoDigitNum[0] !== "0" && +twoDigitNum < 27) {
            total += dfs(i+2);
        }
        cache.set(i, total);
        return total;
    }

    return dfs(0);
};

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
var numDecodings2 = function(s) {

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