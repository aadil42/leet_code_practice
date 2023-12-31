/**
 * Hashing 
 * Time O(n) | Space O(1) (because our hashset won't go over 26)
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    lastIndexOfChars = {};
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        lastIndexOfChars[char] = i;
    }

    let max = -1;
    for(let i = 0; i < s.length; i++) {
        const lastIndex = lastIndexOfChars[s[i]];
        max =  Math.max(max, ((lastIndex+1) - i) - 2);
    }
    return max;
};

/**
 * Brute force
 * Time O(n^2) | Space O(1)
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters1 = function(s) {
    

    let max = -1;
    for(let i = 0; i < s.length; i++) {
        for(let j = i+1; j < s.length; j++) {
            if(s[j] === s[i]) {
                max = Math.max(((j+1)-i)-2, max);
            }
        }
    }
    return max;
};