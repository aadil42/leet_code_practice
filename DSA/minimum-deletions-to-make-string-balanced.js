/**
 * Greedy
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let bl = 0;
    let ar = s.split("").slice(0).filter((char) => char === "a").length;
    let min = Infinity;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "a") ar--;
        min = Math.min(min, bl+ar);
        if(s[i] === "b") bl++;
    }
    return min;
};