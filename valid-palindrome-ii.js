/**
 * Two Pointers | Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome-ii/
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {

    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if(s[left] !== s[right]) {

        if(
        isValid(left + 1, right + 1) ||
        isValid(left, right)
        ) return true;

        return false;
        
        }
        left++;
        right--;
    };

return true;
}

function isValid(s, left, right) {
    s = s.slice(left, right);
    return s.split('').reverse().join('') === s;
}

/**
 * Brute force
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome-ii
 * @param {string} s
 * @return {boolean}
 */
//

 var validPalindromeBrute = function(s) {
    
    for(let i = 0; i < s.length; i++) {
        if(isValid(s.slice(0, i) + s.slice(i + 1))) return true;
    }

    function isValid(s) {
        return s.split('').reverse().join('') === s;   
    }

    return false;
};

