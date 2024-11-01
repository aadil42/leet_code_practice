/**
 * Set | Array | String
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    
    if (s.length === 1) return s;
    if (s.length === 2) return s;

    const toBeRemoved = new Set();

    for (let i = 2; i < s.length; i++) {
        if (!isValid(i, s)) {
            toBeRemoved.add(i);
        }
    }

    const ans = [];

    for (let i = 0; i < s.length; i++) {
        if (!toBeRemoved.has(i)) {
            ans.push(s[i]);
        }
    }

    return ans.join("");
};

const isValid = (i, s) =>{
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) return false;
    return true;
}