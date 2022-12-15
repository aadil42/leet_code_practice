
// brute force O(haystack*needle);
var strStrBrute = function(haystack, needle) {
    
    for(let i = 0; i < haystack.length; i++) {
        if(checkStr(i, needle, haystack)) {
            return i;
        }
    }
  
    return -1;
  };
  
  function checkStr(i, needle, hayStack) {
  
  for(let j = 0; j < needle.length; j++) {
      if(hayStack[i+j] !== needle[j]) return false;
  }
  
  return true;
  }

//   efficient with KMP algorithm. O(m+n);
var strStr = function(haystack, needle) {
    
    const pattern = Array(needle.length).fill(0);

    let i = 1;
    let j = 0;

    while(i < needle.length) {
        if(needle[i] === needle[j]) {
            pattern[i] = j + 1;
            i++;
            j++;
        } else if(needle[i] !== needle[j]) {
            if(j === 0) {
                pattern[i] = 0;
                i++;
            } else if(j !== 0 && needle[j] === needle[i]) {
                pattern[i] = 1 + pattern[j - 1];
                i++;
            } else {
                j = pattern[j - 1];
            }
        }
    }
    
 
j = 0;
i = 0;

while(i < haystack.length) {

    if(haystack[i] === needle[j]) {
        i++;
        j++;
    } else if(haystack[i] !== needle[j]) {
        if(j === 0) {
            i++;
        } else {
        j = pattern[j - 1];            
        }
    }

    if(j === needle.length) return i - needle.length;
}

return -1;

}

// abcdabca

// [0,1,2,0,1,2,3,3]
// AAACAAAA
//    j   i

// aaaxaaax
// aaaa
const haystack = "abcxabcdabxabcdabcdabcy", needle = "abcdabcy";

console.log(strStr(haystack, needle));
  
  

