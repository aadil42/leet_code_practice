/**
 * Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let ones = s.split('').reduce((acc, bit) => {
        if(bit === "1") return acc+1;
        return acc; 
    }, 0);

    let i = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let maxScore = 0;
    while(i < s.length - 1) {
        if(s[i] === "0") zeroCount++;
        if(s[i] === "1") oneCount++;

        maxScore = Math.max(maxScore, zeroCount + (ones - oneCount));
        i++;
    }   

    return maxScore;
};