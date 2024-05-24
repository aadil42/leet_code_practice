/**
 * BackTracking | Recursion
 * Time O(2^n) | Space O(1)
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {

    const scoreHash = {};
    const letterFreq = {};
    
    for(let i = 0; i < score.length; i++) {
      const letter = String.fromCharCode(97+i);
      scoreHash[letter] = score[i];
    }
      
    const decrementFreq = (word) => {
      for(let i = 0; i < word.length; i++) {
          const letter = word[i];
          letterFreq[letter] -= 1;
      }
    }
  
    const incrementFreq = (word) => {
      for(let i = 0; i < word.length; i++) {
          const letter = word[i];
          letterFreq[letter] += 1;
      }
    }
  
    const calcScore = (word) => {
      let score = 0;
      for(let i = 0; i < word.length; i++) {
          const letter = word[i];
          score += scoreHash[letter];
      }
      return score;
    } 
    
    const canTakeWord = (word) => {
      const wordFreq = {};
      for(let i = 0; i < word.length; i++) {
          const letter = word[i];
          wordFreq[letter] = (wordFreq[letter] && wordFreq[letter] + 1) || 1; 
      }
  
      for(const letter in wordFreq) {
          if(!letterFreq[letter]) return false;
          if(letterFreq[letter] < wordFreq[letter]) return false; 
      }
  
      return true;
    }
  
  
    for(let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      letterFreq[letter] = (letterFreq[letter] + 1) || 1; 
    }
  
    let maxScore = 0;
  
    const dfs = (i, currScore) => {
  
      if(i === words.length) {
          maxScore = Math.max(maxScore, currScore);
          return;
      };
  
      // we have two choices here
      if(canTakeWord(words[i])) {
         currScore += calcScore(words[i]);
         decrementFreq(words[i]);
         dfs(i+1, currScore);
         currScore -= calcScore(words[i]);
         incrementFreq(words[i]);
         dfs(i+1, currScore);
      }
      // only have one choice
      dfs(i+1, currScore);
    }
    
    dfs(0, 0);
    return maxScore;
  };