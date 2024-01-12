/**
 * Backtracking/Recursion
 * 
 * Time O(n^n) | Space O(n)
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    
    function dfs(i, subString) {
    if(i === s.length) return true;    

        for(let j = i; j < s.length; j++) {
            let currentString = s.slice(i, j + 1);
            currentString = +currentString;
            if(subString - currentString === 1) {
            if(dfs(j+1, currentString)) return true;
            }
        }
        return false;
    }

        for(let i = 0; i < s.length -1; i++) {
            const subString = s.slice(0, i + 1);
            if(dfs(i+1, +subString)) return true;
        }
        
        return false;
};