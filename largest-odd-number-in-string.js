/**
 * Math | Greedy | Iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/largest-odd-number-in-string/
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    let right = num.length - 1;
    num = num.split('');
    
    while(right > -1) {
        const isOdd = (+num[right]) % 2;
        if(isOdd) break;
        right--;
    }
    
    return num.slice(0, right+1).join('');
};