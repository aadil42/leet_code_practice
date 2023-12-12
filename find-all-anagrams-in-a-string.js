/**
 * Hashing
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let pHash = new Array(26).fill(0);

    for(let i = 0; i < p.length; i++) {
        const char = p[i];
        pHash[char.charCodeAt(0) - 97] += 1;
    }
    pHash = pHash.join('-');

    const sHash = new Array(26).fill(0);

    let start = 0;
    let end  = 0;

    const result = [];
    while(end < s.length) {
        if(end - start === p.length) {
            const char = s[start];
            sHash[char.charCodeAt(0) - 97] -= 1;
            start++;
        }
        const char = s[end];
        sHash[char.charCodeAt(0) - 97] += 1;

        if(sHash.join('-') === pHash) result.push(start);
        end++;
    }

    return result;
};

/**
 * Hashing | Counting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams1 = function(s, p) {

    const sCount = {};
    const pCount = {};

    p.split("").forEach((element, index) => {
        pCount[element] = (pCount[element] && pCount[element] + 1) || 1;
        sCount[s[index]] = (sCount[s[index]] && sCount[s[index]] + 1) || 1;
    });

   let left = 0;
   let right = p.length - 1;

    const res = [];

   while(right < s.length) {
       if(checkAna(sCount, pCount)) {
           res.push(left);
       }
        sCount[s[left]] -= 1;
        left++;
        right++;
        sCount[s[right]] = (sCount[s[right]] && sCount[s[right]] + 1) || 1;
   }

   return res;
}

function checkAna(sCount, pCount) {
    for(const prop in pCount) {
        if(!sCount[prop] || sCount[prop] !== pCount[prop]) return false;
    }
    return true;
}

/**
 * Brute Force
 * Time O(s*p) | Space O(1);
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams2 = function(s, p) {
  
    let pHash = Array(26).fill(0);

    p.split('').forEach((element) => {
         charCode = element.charCodeAt(0);
        if(pHash[charCode - 97] !== 0) {
            pHash[charCode - 97] += 1;
        } else {
            pHash[charCode - 97] = 1;
        }
    });

    pHash = pHash.join("");
    const res = [];
    for(let i = 0; i < s.length - p.length + 1; i++) {
        if(checkAna(i,p.length, pHash,s)) {
            res.push(i);
        }
    }

    return res;
};

function checkAna(i, plen, pHash, s) {

    hashArray = Array(26).fill(0);
       
    for(let j = i; j < i + plen;  j++) {
            const charCode = s[j].charCodeAt(0);
        if(hashArray[charCode - 97] !== 0) {
            hashArray[charCode - 97] += 1;
        } else {
            hashArray[charCode - 97] = 1;
        }
    } 

    return hashArray.join("") === pHash;
}

















