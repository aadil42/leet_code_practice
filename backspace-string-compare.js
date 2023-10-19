/**
 * Stack 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/backspace-string-compare/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const sStack  = [];
    const tStack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "#") {
            sStack.pop();
            continue;
        };
        sStack.push(s[i]);
    }
    for(let i = 0; i < t.length; i++) {
        if(t[i] === "#") {
            tStack.pop();
            continue;
        };
        tStack.push(t[i]);
    }
    return tStack.join('') === sStack.join('');
};
