var isAnagram = function(s, t) {
    
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