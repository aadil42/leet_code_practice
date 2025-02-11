/** 
 * BruteForce | String
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    while(s.includes(part)) {
        const idx = s.indexOf(part);
        s = s.slice(0, idx) + s.slice(idx+part.length);
    }

    return s;
};