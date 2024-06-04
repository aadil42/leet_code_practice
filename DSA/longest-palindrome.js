/**
 * Hashing
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/longest-palindrome/description/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    

    const frequency = {};

    for(let i = 0; i < s.length; i++) { 
        const charCode = s[i].charCodeAt(0);
        frequency[charCode] = (frequency[charCode] && frequency[charCode] + 1 || 1);
    }

    console.log(frequency);
    let totalEvens = 0;
    let hasOdd = false;
    for(const key in frequency) {
        if(frequency[key] % 2 === 0) {
            totalEvens += frequency[key];
            frequency[key] = 0;
        } else {
            hasOdd = true;
            totalEvens += frequency[key] - 1;
        }
    }
    return totalEvens + (hasOdd && 1);
};