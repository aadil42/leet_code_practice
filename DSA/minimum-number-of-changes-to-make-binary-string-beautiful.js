/**
 * String | Array | brain-teasing-logic
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    const result = s.match(/.{1,2}/g);

    const getMin = (str) => {
        if(str[0] === str[1]) return 0;
        return 1;
    }

    let min = 0;

    for(let i = 0; i < result.length; i++) {
        min += getMin(result[i]);
    }

    return min;
};