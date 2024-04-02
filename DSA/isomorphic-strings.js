/**
 * Hashing 
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/isomorphic-strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) return false;

    const mapping = {};
    const reverseMapping = {};

    for(let i = 0; i  < s.length; i++) {
        if(mapping[s[i]] && mapping[s[i]] !== t[i]) return false;
        if(reverseMapping[t[i]] !== undefined && reverseMapping[t[i]] !== s[i]) return false;
        if(!mapping[s[i]]) {
             mapping[s[i]] = t[i];
             reverseMapping[t[i]] = s[i];
        }

    }

    return true;
};


/**
 * Hashing 
 * Time O(n) | Space O(1) | Technically Time-complexity is O(n*128).
 * https://leetcode.com/problems/isomorphic-strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic0 = function(s, t) {
    
    if(s.length !== t.length) return false;

    const mapping = {};
    const reverseMapping = {};

    // constant time of O(1)
    const checkReverseMapping = (prop, char) => {
        for(const c in mapping) {
            if(c === prop) return true;
            if(mapping[c] === char) return false;
        }
        return true;
    }

    for(let i = 0; i  < s.length; i++) {
        if(mapping[s[i]] && mapping[s[i]] !== t[i]) return false;
        if(!checkReverseMapping(s[i], t[i])) return false;
        if(!mapping[s[i]]) {
             mapping[s[i]] = t[i];
             reverseMapping[t[i]] = s[i];
        }

    }

    return true;
};


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
var isIsomorphic1 = function(s, t) {

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