// brute force with recursion
var wordBreakRecursion = function(s, wordDict) {

  const wordCache = {};

  function dfs(index) {

    if(index === s.length) {
        return true;
    }
    
    for(let i = 0; i < wordDict.length; i++) {
        const currentWord = s.substring(index, wordDict[i].length + index);
        if(wordDict[i] === currentWord) {
          const result = dfs(index + wordDict[i].length);
          if(result) {
            return true;
          }
        }
    }
    
    return false;
  }

  return dfs(0);
};

// const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];
// console.log(wordBreakRecursion(s,wordDict));
  
// with array solution time complexity will be n*m

var wordBreak = function(s, wordDict) {

  const dpArray = new Array(s.length + 1).fill(false);

  // setting the last value to true;
  dpArray[s.length] = true;


  for(let i = s.length - 1; i > -1; i--) {
    for(let j = 0; j < wordDict.length; j++) {
      const currentWord = s.substr(i, wordDict[j].length);
      if((i + wordDict[j].length) <= s.length && wordDict[j] === currentWord) {
          dpArray[i] = dpArray[i + wordDict[j].length];
      }
      if(dpArray[i]) break;
    }
  }

  console.log(dpArray);
  
  return dpArray[0];
};

const s = "abcd", wordDict = ["a","abc","b","cd"];
console.log(wordBreak(s,wordDict));


// solved second time.
var wordBreakR = function(s, wordDict) {

  const dpArray = new Array(s.length + 1).fill(false);

  dpArray[s.length] = true;

  for(let i = s.length - 1; i > -1; i--) {
      for(let j = 0; j < wordDict.length; j++) {
          const currentWord = s.substring(i, i + wordDict[j].length);
          if(i + wordDict[j].length <= s.length  && currentWord === wordDict[j]) {
              dpArray[i] = dpArray[i + wordDict[j].length];
          }
          if(dpArray[i]) break;
      }
  }

  return dpArray[0];
};