/**
 * 
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/isomorphic-strings/
 * This is Very irritatingly annyoing problem. Beware of test cases.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length !== t.length) return false;

    const charMap = {};
    const pointedSet = new Set();
    let constructedStr = "";
    for(let i = 0; i < s.length; i++) {
        if(charMap[s[i]]) {
            constructedStr += charMap[s[i]];
            continue;
        };
        
        if(!pointedSet.has(t[i])) {
            charMap[s[i]] = t[i];
            pointedSet.add(t[i]);
            constructedStr += t[i];
            continue;
        }
        
        constructedStr += "#";
    }

    return constructedStr === t;
};