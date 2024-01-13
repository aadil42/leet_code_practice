/**
 * Hashing | Counting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
 * 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    
    const frequency = {};
    for(let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] && frequency[s[i]]+1) || 1;
    }

    let minChanges = 0;

    for(let i = 0; i < t.length; i++) {
        if(frequency[t[i]] < 1 || !frequency[t[i]]) minChanges++;
        frequency[t[i]] -= 1;
    }
    return minChanges;
};