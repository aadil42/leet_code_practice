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

/**
 * Sliding Window
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1852493193/
 * @param {string} s
 * @return {number}
 */
//  for revision purpose
var lengthOfLongestSubstringR = function(s) {
    
    let max = 0;
    let uniqueSet = new Set();

    let left = 0;
    let right = 0;

    while (right < s.length) {

        while (uniqueSet.has(s[right])) {
            uniqueSet.delete(s[left]);
            left++;
        }

        uniqueSet.add(s[right]);

        right = right + 1;
        max = Math.max(max, right - left);
    }

    return max; 
};