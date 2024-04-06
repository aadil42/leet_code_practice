/**
 * Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 * 
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    
    const stack = [];
    s = s.split("");

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ")" && !stack.length) {
            s[i] = "#";
        }
        if(s[i] === "(") {
            stack.push([1,i]);
        }
        if(s[i] === ")" && stack.length) stack.pop();
    }

    while(stack.length) {
        const [one, idx] = stack.pop();
        s[idx] = "#";
    }

    return s.filter((char) => char !== "#").join("");
};