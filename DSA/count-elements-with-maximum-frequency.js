/**
 * Hashing | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/count-elements-with-maximum-frequency
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    

    const frequncies = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        frequncies[num] = (frequncies[num] && frequncies[num] + 1) || 1;
    }

    let currentMaxFrequency = 0;
    let totalFrequancy = 0;

    for(const key in frequncies) {
        const cf = frequncies[key];

        if(cf > currentMaxFrequency) {
            totalFrequancy = cf;
            currentMaxFrequency = cf;
            continue;
        }
        if(cf === currentMaxFrequency) {
            totalFrequancy += cf;
        }
    }

    return totalFrequancy;
};