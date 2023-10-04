/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    const limit = nums.length/3;
    const numFrequency = {};
    const result = new Set();

    nums.forEach((num) => {
        const frequency = numFrequency[num] || 0;
        numFrequency[num] = frequency+1;
        if(numFrequency[num] > limit) result.add(num);
    });

    return [...result];
};