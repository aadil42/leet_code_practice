// brute force with recursion
var wordBreak = function(s, wordDict) {

  function dfs(index) {
    if(index === s.length) {
        return true;
    }
    
    for(let i = 0; i < wordDict.length; i++) {

        console.log(s.substring(index, wordDict[i].length + index), index, wordDict[i].length + index);

        if(wordDict[i] === s.substring(index, wordDict[i].length + index)) {
           return dfs(index + wordDict[i].length);
        };
    }

    return false;
  }

  return dfs(0);
};

const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];
console.log(wordBreak(s,wordDict));
// leet code {leet, code};