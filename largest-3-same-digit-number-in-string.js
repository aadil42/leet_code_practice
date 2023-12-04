/**
 * String | iteration
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string
 * Time O(n) | Space O(1)
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let maxSameThreeDigit = 0;
    let isSubStringFound = false;

    for(let i = 0; i < num.length; i++) {

        let digit = '';
        for(let j = i; j < i+3; j++) {
            digit += num[j];
        }

        if(digit.length === 3  && digit[0]===digit[1] && digit[1]===digit[2]) {
            isSubStringFound = true;
            maxSameThreeDigit = Math.max(maxSameThreeDigit, +digit); 
        }
    }

    if(!isSubStringFound) return "";
    if(maxSameThreeDigit) return maxSameThreeDigit.toString();
    return "000";
};