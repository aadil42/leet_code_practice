/**
 * String | Brute Force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/clear-digits
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    
    const digitSet = new Set();

    for (let i = 0; i < 10; i++) {
        digitSet.add(i.toString());
    }

    s = s.split("");

    for (let i = 0; i < s.length; i++) {

        if (digitSet.has(s[i])) {
            let j = i-1;
            while (j > -1) {
                if (!digitSet.has(s[j]) && s[j] != "#") {
                    s[j] = "#";
                    break;
                }
                j--;
            }
            s[i] = "#"
        }
    }

    return s.filter((char) => char != "#").join("");
};