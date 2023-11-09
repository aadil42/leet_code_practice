/**
 * Math | Gauess formula for finding total | Two pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/count-number-of-homogenous-substrings
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    
    const mod = 10**9 + 7;
    let totalHomogenousStrings = 0;
    
    const getGaussTotal = (len) => (len/2) * (1+len);

    let left = 0;
    let right = 0;

    while(right < s.length + 1) {
      if(s[left] !== s[right]) {
        totalHomogenousStrings += getGaussTotal(right-left);
        totalHomogenousStrings %= mod;
        left = right;
      } 
      right++;
    }

    return totalHomogenousStrings;
};