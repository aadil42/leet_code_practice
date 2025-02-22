/**
 * SlidingWindow 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const currSet = new Set();

    let left = 0;
    let right = 0;
    let max = 0;


    while (right < s.length) {
        
        const char = s[right];

        while (left < right && currSet.has(char)) {
            currSet.delete(s[left]);
            left++;
        }

        currSet.add(s[right]);
        max = Math.max(max, right-left+1);
        right++;
    }

    return max;
};