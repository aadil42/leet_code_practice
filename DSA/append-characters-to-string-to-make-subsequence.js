/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    
    let ti = 0;
    let si = 0;

    while(si < s.length) {
        if(s[si] === t[ti]) ti++;
        si++;
    }

    return t.length - ti;
};