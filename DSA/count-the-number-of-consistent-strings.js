/**
 * Hashing
 * Time O(n) | Space O(1) {Can't have more than 26 letters}
 * https://leetcode.com/problems/count-the-number-of-consistent-strings
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(""));

    const isValid = (word) => {
        return word.split("").every((char) => {
            if(allowedSet.has(char)) return true;
            return false;
        });    
    }
    
    return words.filter((word) => {
        if(isValid(word)) return true;
        return false;
    }).length;
};

