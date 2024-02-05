/**
 * Hashing | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/first-unique-character-in-a-string
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    const frequency = {};

    for(let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] && frequency[s[i]] + 1) || 1;
    }

    for(let  i = 0; i < s.length; i++) {
        if(frequency[s[i]] === 1) return i;
    }
    
    return -1;
};