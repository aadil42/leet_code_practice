/**
 * Hashing 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/unique-length-3-palindromic-subsequences
 * 
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    
    const uniquePalindromicSS = new Set();

    const leftHalf = {};
    const rightHalf = {};

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const frequency = rightHalf[char] || 0;
        rightHalf[char] = frequency+1;
    }

    for(let i =  0; i < s.length; i++) {
        const char = s[i];
        // reduce the count of right char by 1
        if(rightHalf[char]) rightHalf[char] -= 1;
        
        for(key in leftHalf) {
            if(rightHalf[key]) uniquePalindromicSS.add(`${key}${char}${key}`);
        }

        const frequencyLeft = leftHalf[char] || 0;
        leftHalf[char] = frequencyLeft + 1;
    }
    console.log(uniquePalindromicSS);
    return uniquePalindromicSS.size;
};

// brute force approche O(n^3);

var countPalindromicSubsequenceBrute = function(s) {
    const palindromSet = new Set();

    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j < s.length; j++) {
            for(let k = j  + 1;  k < s.length; k++) {
                if(s[i] === s[k]) {
                    palindromSet.add(s[i] + s[j] + s[k]);
                    break;
                }
            }
        }
    }

    return palindromSet.size;
};

// optimized approche O(n); 
var countPalindromicSubsequence1 = function(s) {
 
    const resSet = new Set();
    const leftHash = new Set();
    const rightHash = new Map();
    
    s.split('').forEach((element) => {
        const current = rightHash.get(element); 
        if(!current) {
            rightHash.set(element, 1);
        } else {
            rightHash.set(element, current+1);
        }
    });
    
    
    for(let i = 0; i < s.length; i++) {
    
        const rightCurrent = rightHash.get(s[i]);
        rightHash.set(s[i], rightCurrent - 1);
        if(!rightHash.get(s[i])) {
            rightHash.delete(s[i]);
        }
    
        for(let  j = 0; j < 26; j++) {
            const char  = String.fromCharCode('a'.charCodeAt(0) + j);
            if(leftHash.has(char) && rightHash.has(char)) {
                resSet.add(s[i]+char);
            }
        }
        leftHash.add(s[i]);
    }
    
    return resSet.size;
    
    };