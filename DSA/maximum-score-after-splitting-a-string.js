/**
 * Array | Counting
 * Time O(n) | Space O(n) (because  we're making array when counting ones freq)
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let zeroCount = 0;
    let oneCount = s.split("").filter((c) => c === "1").length;

    let maxSum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") zeroCount++;;
        if (s[i] === "1") oneCount--;
        maxSum = Math.max(maxSum, zeroCount+oneCount);
    }

    return maxSum;
};

/**
 * Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 * @param {string} s
 * @return {number}
 */
var maxScore0 = function(s) {
    
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

