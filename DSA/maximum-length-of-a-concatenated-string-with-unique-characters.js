/**
 * Recursion/Backtracking
 * 
 * Time O(2^n) | Space O(n); 
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    
    const uniqueChars = new Set();
    let MaxLen = 0;
    function dfs(i) {
      if(i === arr.length) {
        return;
      }

      if(setChar(arr[i])) {
        dfs(i+1);
        removeChar(arr[i]);
      }
      dfs(i+1);
    }

    dfs(0);
    return MaxLen;

    function removeChar(word) {
        word.split('').forEach(char => uniqueChars.delete(char));
    }

    function setChar(word) {
      
      const tempHash = new Set();

      word = word.split('');
    //   check if the current word contains  any duplicate chars
      for(let i = 0; i < word.length;  i++) {
          if(tempHash.has(word[i])) return false;
          tempHash.add(word[i]);
      }
    // check if the char already exist in our globle set.
      for(char of tempHash) {
          if(uniqueChars.has(char)) return false;
      }

    // finally, the word is valid, add all its char to globle set
      for(char of tempHash) {
          uniqueChars.add(char);
      }

    MaxLen = Math.max(MaxLen, uniqueChars.size);
    return true;
    }

};