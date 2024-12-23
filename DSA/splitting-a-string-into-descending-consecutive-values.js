/**
 * BackTracking | DFS
 * Time O(n^2) | Space O(n) 
 * https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {

    const dfs = (start, pre) => {
        if(start === s.length) return true;
        for(let i = start; i < s.length;  i++) {
            const subStr = s.slice(start, i+1);
            if((+pre) - (+subStr) === 1) {
                if(dfs(i+1, subStr)) return true;
            }
        }

        return false;
    }

    for(let i = 0; i < s.length; i++) {
        const subStr = s.slice(0, i+1);
        if(i+1 === s.length) continue; // this means we took the entire string without spliting.
        if(dfs(i+1, subStr)) return true;
    }

    return false;
};

/**
 * Backtracking/Recursion
 * 
 * Time O(n^n) | Space O(n)
 * @param {string} s
 * @return {boolean}
 */
var splitString0 = function(s) {
    
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