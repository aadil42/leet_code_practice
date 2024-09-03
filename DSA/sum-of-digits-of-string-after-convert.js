/**
 * Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
    let digitStr =  s.split("")
                        .map((letter) => letter.charCodeAt(0) - 97 + 1)
                        .join("");

    while(k) {
        digitStr =  digitStr
                    .split("")
                    .reduce((acc, digit) => +digit + acc, 0)
                    .toString();
        k--;
    }

    return +digitStr;
};