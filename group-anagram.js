var groupAnagrams = function(strs) {
    

    const result = [];
    const myHash = new Map();

    strs.forEach((word) => {

        let newHash = new Array(26).fill(0);
        [...word].forEach((char) => {
            // console.log(char.charCodeAt(0) - 'a'.charCodeAt(0));
            newHash[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            console.log(newHash);
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

const strs = ["bdddddddddd","bbbbbbbbbbc"];
console.log(groupAnagrams(strs));


// brute force with n^3 time complexity
var groupAnagramsBrute = function(strs) {
    const result = [];
    
    for(let i = 0; i < strs.length; i++) {
        const current = [];
        
        current.push(strs[i]);
        
        for(let j = i + 1; j < strs.length; j++) {
            console.log(i,j);
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
