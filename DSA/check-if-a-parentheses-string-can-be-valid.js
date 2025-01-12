/**
 * Stack | Greedy
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {

    const unlockedStack = [];
    const lockedStack = [];

    for (let i = 0; i < s.length; i++) {

        if (locked[i] === "0") {
            unlockedStack.push(i);
            continue;
        }

        if (s[i] === "(") {
            lockedStack.push(i);
            continue;
        }

        if (s[i] === ")") {

            if (lockedStack.length) {
                lockedStack.pop();
                continue;
            }

            if (unlockedStack.length) {
                unlockedStack.pop();
                continue;
            } 

            return false;
        }
    }

    while (lockedStack.length && 
           unlockedStack.length && 
           lockedStack[lockedStack.length - 1] < unlockedStack[unlockedStack.length - 1]) {
            lockedStack.pop();
            unlockedStack.pop();
    }

    return unlockedStack.length % 2 === 0 && lockedStack.length === 0;
};
