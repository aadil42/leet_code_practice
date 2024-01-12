/**
 * Iterating
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-the-difference/
 * 
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let tTotal = 0;
    for(let i = 0; i < t.length; i++) {
        tTotal += t[i].charCodeAt(0);
    }
    
    let targetString = tTotal;
    for(let i = 0; i < s.length; i++) {
        targetString -= s[i].charCodeAt(0);
    }

    return String.fromCharCode(targetString);
};

/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-the-difference
 * 
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference1 = function(s, t) {
    
    const stringCache = {};
    for(let i = 0; i < t.length; i++) {
        const count = stringCache[t[i]] || 0;
        stringCache[t[i]] = count+1;
    }

    for(let i = 0; i < s.length; i++) {
        stringCache[s[i]] -= 1;
    }

    for(key in stringCache) {
        if(stringCache[key]) return key;
    }
    
};