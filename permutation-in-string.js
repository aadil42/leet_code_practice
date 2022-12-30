/**
 * Brute force
 * Time O(n*m) | Space O(m)
 * https://leetcode.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
    const isValid = s1.length <= s2.length; 
    if(!isValid) return false;

    for(let i = 0; i < s2.length; i++) {
        slicedString = s2.slice(i, i + s1.length);
        if(isPermutation(slicedString, s1)) return true;
    }

    return false;
};

var isPermutation = function(s, t) {
    console.log(s,t);
    if(s.length !== t.length) return false;
    
    const myHash = new Map();
    
    [...s].forEach((e) => {
        
    if(!myHash.has(e)) {
        myHash.set(e, 1);
    } else {
        myHash.set(e, myHash.get(e) + 1);
    }
    });
    
    for(let i = 0; i < t.length; i++) {
        if(myHash.has(t[i]) && myHash.get(t[i]) > 0){
            myHash.set(t[i], myHash.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    
    return true;
};