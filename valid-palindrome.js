/**
 * Two Pointers | Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s = s.split("");
    s = s.map((char) => (/[A-Z]/.test(char) ? char.toLowerCase() : char))
         .filter((char) => /[a-z0-9]/.test(char));

    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};