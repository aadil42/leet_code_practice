/**
 * Backtracking | DFS | Recursion
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  return dfs(0, new Set(), arr);
};

const checkIfValid = (set, word) => {
  return word.split("").every((char) => {
      if(set.has(char)) return false;
      return true;
  });
}

const addToSet = (set, word) => {
  word.split("").forEach((char) => set.add(char));
}
const removeFromSet = (set, word) => {
  word.split("").forEach((char) => set.delete(char));
}

const dfs = (idx, currSet, arr) =>  {
  if(idx === arr.length) {
      return currSet.size;
  }

  // we have 2 choices
  // the second condition checks weathre there are duplicates in the word itself.
  if(checkIfValid(currSet, arr[idx]) && new Set(arr[idx].split("")).size === arr[idx].length) {
      addToSet(currSet, arr[idx]);
      const choice1 = dfs(idx+1, currSet, arr);
      removeFromSet(currSet, arr[idx]);
      const choice2 = dfs(idx+1, currSet, arr);
      return Math.max(choice1, choice2);
  }

  // only have 1 choice 
  return dfs(idx+1, currSet, arr);
}

/**
 * Recursion | Backtracking
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters
 * @param {string[]} arr
 * @return {number}
 */
var maxLength0 = function(arr) {
  const exists = (s, mySet) => {
      s = s.split("");

      let i = 0;

      while(i < s.length) {
          if(mySet.has(s[i])) return true;
          i++;
      }

      return false;
  }

  const hasDuplicateChars = (s) => {

      const set = new Set();
      let i = 0;

      while(i < s.length) {
          if(set.has(s[i])) return true;
          set.add(s[i]);
          i++;
      }

      return false;
  }

  const addChars = (s, mySet) => {

      let i = 0;
      while(i < s.length) {
          mySet.add(s[i]);
          i++;
      }
      
  }

  const deleteChars = (s, mySet) => {
      
      let i = 0;
      while(i < s.length) {
          mySet.delete(s[i]);
          i++;
      }

  }


  const dfs = (i, runningSequence) => {

      if(i === arr.length) {
          return runningSequence.size;
      }

      if(!exists(arr[i], runningSequence) && !hasDuplicateChars(arr[i])) {
          
          addChars(arr[i], runningSequence);
          const choice1 = dfs(i+1, runningSequence);
          deleteChars(arr[i], runningSequence);
          const choice2 = dfs(i+1, runningSequence);

          return Math.max(choice1, choice2);
      }

      const choice3 = dfs(i+1, runningSequence);
      return choice3;
  }

  return dfs(0, new Set());
};

/**
 * Recursion/Backtracking
 * 
 * Time O(2^n) | Space O(n); 
 * @param {string[]} arr
 * @return {number}
 */
var maxLength1 = function(arr) {
    
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
