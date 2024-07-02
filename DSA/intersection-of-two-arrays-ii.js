/**
 * Hashing | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/intersection-of-two-arrays-ii
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const num1Freq = {};
    const num2Freq = {};

    const result = [];

    for(let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        num1Freq[num] = (num1Freq[num] && num1Freq[num] + 1) || 1;
    }

    for(let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        num2Freq[num] = (num2Freq[num] && num2Freq[num] + 1) || 1;
    }

    for(const key in num1Freq) {
        if(num2Freq[key]) {
            result.push(...Array(Math.min(num1Freq[key], num2Freq[key])).fill(key));
        } 
    }

    return result;
};