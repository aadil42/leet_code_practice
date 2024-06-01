/**
 * String
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/score-of-a-string
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    return s.split('')
            .reduce((acc, char, i) => {
                if(i !== s.length - 1) {
                    return acc + Math.abs(char.charCodeAt(0) - s[i+1].charCodeAt(0));
                }
                return acc;
            },0);
};