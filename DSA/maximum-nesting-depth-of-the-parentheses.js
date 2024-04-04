/**
 * Stack | Since you just need the length of the stack you can use a variable instead of the stack DS.
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let currDepth = 0;
    let maxDepth = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") currDepth++;
        maxDepth = Math.max(currDepth, maxDepth);
        if(s[i] === ")")  currDepth--;
    }
    return maxDepth;
};

var maxDepth1 = function(s) {
    let currunt = 0;
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            currunt += 1;
            max = Math.max(max, currunt);
        } else if (s[i] == ")"){
            currunt -= 1;
        }
    }
    
    return max;
};
maxDepth("8*((1*(5+6))*(8/6))")
