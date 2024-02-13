/**
 * 
 * Brute Force | Iteration | String
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    const isPalindrome = (str) =>  {

        let left = 0;
        let right = str.length - 1;
        
        while(left < right) {
            if(str[left] !== str[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    for(let i = 0; i < words.length; i++) {
        if(isPalindrome(words[i])) return words[i];
    }

    return "";
};