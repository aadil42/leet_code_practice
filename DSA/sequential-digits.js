/**
 * Enumiration | Array.
 * Time O(1) | Space O(1) | Won't exceed 10^2
 * https://leetcode.com/problems/sequential-digits/
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function(low, high) {
    
    const maxSequance = "123456789";
    
    let len = low.toString().length;
    let targetLen = high.toString().length + 1;

    const result = [];
    const firstDigit = +low.toString()[0];
    let i = firstDigit - 1;

    while(len < targetLen)  {

        while(i+len < 10) {
            const sequanceDigit = +maxSequance.slice(i, i+len);
            if(sequanceDigit > high) return result;
            if(sequanceDigit >= low) {
                result.push(sequanceDigit);
            }
            i++;
        }
        
        i=0;
        len++;
    }

    return result;
};