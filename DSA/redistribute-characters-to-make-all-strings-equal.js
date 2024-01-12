/**
 * Hashing 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 * 
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {

    const charFrequency = {};
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            const char = words[i][j];
            charFrequency[char] = (charFrequency[char] && charFrequency[char] + 1) || 1;
        }
    }

    for(const char in charFrequency) {
        if(charFrequency[char]%words.length) return false;
    }
    return true;
};