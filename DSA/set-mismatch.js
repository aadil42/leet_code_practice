/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/set-mismatch
 * 
 * @param {number[]} nums
 * @return {number[]}
 * 
 */
var findErrorNums = function(nums) {
    
    let unique = new Set();

    let i = 0;
    
    const result = [];
    while(i < nums.length) {
        if(unique.has(nums[i])) result.push(nums[i]);
        unique.add(nums[i]);
        i++; 
    }

    i = 1;

    while(i < nums.length + 1) {
        if(!unique.has(i)) {
            result.push(i);
            return result;
        };
        i++;
    }

    return result;
};