/**
 * HashMap | SlidingWindow
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    const originalFreq = getFreq(s1);
    let freq = {...originalFreq};

    let right = 0;
    let left = 0;

    while (right < s2.length + 1) {
        if ((right - left) === s1.length) return true;

        if (freq[s2[right]] > 0) {
            freq[s2[right]] -= 1;
            right++;
            continue;
        }

        if (freq[s2[right]] !== undefined) {
            freq[s2[left]] += 1;
            left++;
            continue;
        }

        right++;
        left = right;
        freq = {...originalFreq};
    }

    return false;
};

const getFreq = (s1) => {

    const freq = {};
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        freq[char] = (freq[char] && freq[char] + 1) || 1;
    }

    return freq;
}

/**
 * Brute force
 * Time O(n*m) | Space O(m)
 * https://leetcode.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusionBF = function(s1, s2) {
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


/**
 * HashMap | SlidingWindow
 * Time O(n) | Space O(n)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion0 = function(s1, s2) {
    const isValid = s1.length <= s2.length; 
 if(!isValid) return false;

 const s1Hash = new Map();
 const s2Hash = new Map();

 // populating both hash with 0's
 for(let i = 0; i < 26; i++) {
     s1Hash.set(String.fromCharCode(97+i),0);
     s2Hash.set(String.fromCharCode(97+i),0);
 }

 // populating s1Hash and s2Hash upto s1Hash length.
 for(let i = 0; i < s1.length; i++) {
     if(s1Hash.has(s1[i])) {
         s1Hash.set(s1[i], s1Hash.get(s1[i]) + 1);
     } else {
         s1Hash.set(s1[i], 1);
     }

     if(s2Hash.has(s2[i])) {
         s2Hash.set(s2[i], s2Hash.get(s2[i]) + 1);
     } else {
         s2Hash.set(s2[i], 1);
     }
 }    

 let left = 0;
 let right = s1.length;
 let matches = 0;

 for(let i = 0; i <26; i++) {
     s2Char = s2Hash.get(String.fromCharCode(i+97));
     s1Char = s1Hash.get(String.fromCharCode(i+97));

     if(s2Char === s1Char) matches++;
 }
 

 while(right < s2.length) {

     if(matches === 26) return true;

     const leftChar = s2[left];
     const rightChar = s2[right];



    
     s2Hash.set(leftChar, s2Hash.get(leftChar) - 1);

     if(s2Hash.get(leftChar) === s1Hash.get(leftChar)) {
        matches++;
    } else if(s2Hash.get(leftChar) === s1Hash.get(leftChar) - 1) {
        matches--;
    }
    
     s2Hash.set(rightChar, s2Hash.get(rightChar) + 1);
     if(s2Hash.get(rightChar) === s1Hash.get(rightChar)) {
         matches++;
     } else if(s2Hash.get(rightChar) === s1Hash.get(rightChar) + 1) {
         matches--;
     }

     


     left++;
     right++;
 }
  return matches === 26;
};