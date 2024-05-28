/**
 * SlidingWindow | TwoPointer
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/get-equal-substrings-within-budget
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    let cc = 0;
    let left = 0;
    let right = 0;
    let maxStr = 0;
    
    while(right < s.length) {

        cc += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));

        console.log(cc);
        if(cc <= maxCost) {
            maxStr = Math.max(maxStr, right - left + 1);
        }
        while(left <= right && cc > maxCost) {
            cc -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
            left++;
        }
        right++;
    }
    
    return maxStr;
};