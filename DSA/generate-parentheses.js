/**
 * Recursion | Brute-force.
 * Time O(2^n) | Space O(2^n)
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const ans = [];
    const dfs = (open, close, currStr) => {
  
      if(open === 0 && close === 0) {
          ans.push(currStr);
          return;
      }
  
      // All of the open parenthesis's are finish now we must close.
      if(open === 0) {
          dfs(open, close-1, currStr+")");
          return;
      }
  
      // We can eigher open a parenthises or close it. 
      if(close > open) {
          dfs(open-1, close, currStr+"(");
          dfs(open, close-1, currStr+")");
          return;
      }
  
      // all parenthesis are perfectly formed until now. So we must start by opening a parenthises.
      dfs(open-1, close, currStr+"(");
    }
    
    dfs(n,n,"");
  
    return ans;  
};


/**
 * Recursion
 * Time O(2^n) | Space O(n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis0 = function(n) {
    const result = [];
    const openL = n;
    const closeL = n;

    function dfs(open, close, currentS) {
        if(open === openL && close === closeL) {
            result.push(currentS);
            return;
        }

        if(open > close && open < openL) {
            dfs(open+1, close, currentS + '(');
            dfs(open, close+1, currentS + ')');
        }
        if(open >= openL && close < closeL) {
            dfs(open, close+1, currentS + ')');
        }
        if(open < openL  && open === close) {
            dfs(open+1, close, currentS+'(');
        }
    }

    dfs(0,0,'');
    return result;
};