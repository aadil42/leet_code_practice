/**
 * Stack 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/removing-stars-from-a-string/
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "*") {
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join("");
};