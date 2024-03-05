/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends
 * 
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;
    let minLen  = s.length;

    while(left < right) {
        if(s[left] !== s[right]) return minLen;

        let delCount = 2;

        left++;
        right--;

        while(left < right && s[left] === s[left-1]) {
            left++;
            delCount++;
        }

        while(right > left && s[right] === s[right+1]) {
            right--;
            delCount++;
        }

        minLen = minLen - delCount;
    }

    // when we have odd number of equal chars.
    if(left === right && s[left-1] === s[left] && s[left] === s[right+1]) minLen--;
    
    return minLen;
};