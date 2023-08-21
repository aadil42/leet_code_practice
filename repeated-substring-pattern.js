/**
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 * Time O(n^2) | Space O(1)
 * 
 * Brute Force.
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    
    if(s.length === 1) return false;

    const checkSubStr = (right) => {
        // const subStringLen = right;
        const subStr = s.substring(0, right);
        let left = right;
        while(left < s.length) {

            if(s.substring(left, left + subStr.length) !== subStr) return false;
            left += subStr.length;
        }
        return true;
    }

    let right = 1;
    while(right < s.length) {
        if(s[right] === s[0] && checkSubStr(right)) return true;
        right++;
    }
    return false;
};