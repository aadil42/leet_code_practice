
/**
 * Hashing
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/repeated-dna-sequences/
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    const sequenceSet = new Set();
    const resultSet = new Set();
    s = s.split('');
    for(let i = 0; i < s.length; i++) {
        let dnaSequence = ((i+9 < s.length) && s.slice(i, i+10).join("")) || "";
        if(sequenceSet.has(dnaSequence) && dnaSequence) resultSet.add(dnaSequence);
        if(dnaSequence) sequenceSet.add(dnaSequence);
    }

    return [...resultSet];
};

/**
 * https://leetcode.com/problems/repeated-dna-sequences/
 * Hashing
 * Time O(n) | Space O(n)
 * @param {string} s
 * @return {string[]}
 */

var findRepeatedDnaSequences1 = function(s) {

    const sequanceStack = new Set();
    let resultStack = new Set();
  
    for(let i = 0; i < s.length; i++) {
        const subSequance = getSubSequance(s,i,10); 
        if(sequanceStack.has(subSequance)) {
            resultStack.add(subSequance);
        } else {
            sequanceStack.add(subSequance);
        }
    }  
  
  
    resultStack = [...resultStack];
    return resultStack;
  };
  
  function getSubSequance(s,i,len) {
      return s.slice(i, i + len);
  }
  