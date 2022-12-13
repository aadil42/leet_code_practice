
// brute force O(haystack*needle);
var strStr = function(haystack, needle) {
    
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