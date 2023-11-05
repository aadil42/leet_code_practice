/**
 * Hashing
 * Time O(n)  | Space O(n)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const results = [];
    const cache = {};

    for(let i = 0; i < strs.length; i++) {
        let hash = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++) {
            hash[strs[i][j].charCodeAt(0) - 97] += 1;
        }

        hash = hash.join('-');
        if(cache[hash]) {
            cache[hash].push(strs[i]);
            continue;
        } 

        cache[hash] = [strs[i]];
    }

    for(let key in cache) {
        results.push(cache[key]);
    }
    return results;

};

var groupAnagrams1 = function(strs) {
    

    const result = [];
    const myHash = new Map();

    strs.forEach((word) => {

        let newHash = new Array(26).fill(0);
        [...word].forEach((char) => {
            // console.log(char.charCodeAt(0) - 'a'.charCodeAt(0));
            newHash[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            
        });
        
        // making an array into string
        newHash = newHash.join('-');
        // console.log(newHash);
        if(!myHash.has(newHash)) {
            // console.log(newHash, 'if');
            myHash.set(newHash,[word]);
        } else {
            // console.log(newHash);
            myHash.set(newHash, [...myHash.get(newHash), word]);
        }
    });

    console.log(myHash);
    for(let [key, value] of myHash) {
        result.push(myHash.get(key));
    }
    
    return result;
};

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));


// brute force with n^3 time complexity // with brute force 109 out of 119 test cases are passing // the other are not passing because of stupid edge cases.
var groupAnagramsBrute = function(strs) {
    const result = [];
    
    for(let i = 0; i < strs.length; i++) {
        const current = [];
        
        current.push(strs[i]);
        
        for(let j = i + 1; j < strs.length; j++) {
            // console.log(i,j);
           if(isAnagramR(strs[i], strs[j]))  {
               extracted = strs.splice(j,1);
               current.push(...extracted);
           }
        }
        
        result.push(current);
    }
    
    return result;
};


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

//  solved again for revision purpose
var groupAnagramsR = function(strs) {
    

    const result = [];
     const wordHash = new Map();
      
      for(let i = 0; i < strs.length; i++) {
          let hash = new Array(26).fill(0);
          
          for(let j = 0; j < strs[i].length; j++) {
              hash[strs[i][j].charCodeAt(0) - 97] += 1;
          }
          
          hash = hash.join('-');
          if(wordHash.has(hash)) {
              wordHash.set(hash, [...wordHash.get(hash), strs[i]]);
          } else {
              wordHash.set(hash, [strs[i]]);
          }
      }
      
      for(let [key, value] of wordHash) {
          result.push(value);
      }
      
      return result;    
  };