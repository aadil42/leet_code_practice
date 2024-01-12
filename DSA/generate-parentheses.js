/**
 * Recursion
 * Time O(2^n) | Space O(n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
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