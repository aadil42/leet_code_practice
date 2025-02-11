/** 
 * BruteForce | String | Recursion
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const rec = (s, part) => {
        if (s.includes(part)) return rec(s.replace(part, ""), part);
        return s;
    }
    return rec(s, part);
};

/** 
 * BruteForce | String
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences0 = function(s, part) {
    
    while(s.includes(part)) {
        const idx = s.indexOf(part);
        s = s.slice(0, idx) + s.slice(idx+part.length);
    }

    return s;
};