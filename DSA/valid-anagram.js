/**
 * Hashing
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/valid-anagram
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const sHash = new Array(26).fill(0);
    const tHash = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        sHash[s[i].charCodeAt(0)-97] += 1;
        tHash[t[i].charCodeAt(0)-97] += 1;
    }

    return sHash.join('-') === tHash.join('-');
};

var isAnagram1 = function(s, t) {
    
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

// this was solved second time for revison purpose
var isAnagramR = function(s, t) {
    
    if( s.length !== t.length ) return false;
     
     const charMap = new Map();
     
     // creating word frequencies.
     for(let i =  0; i < s.length; i++) {
         const char = s[i];
         if(charMap.has(char)) {
             charMap.set(char, charMap.get(char) + 1);
         } else {
             charMap.set(char, 1);
         }
     }
     
     // checking if anagram.
     for(let i = 0; i < t.length; i++) {
         const char = t[i];
         if(charMap.get(char)) {
             charMap.set(char, charMap.get(char) - 1);
         } else {
             return false;
         }
     }
     
     
     return true;
     
 };