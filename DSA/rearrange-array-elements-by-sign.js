/**
 * Two Pointers
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/rearrange-array-elements-by-sign
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    const merged = [];

    let posPointer = 0;
    let negPointer = 0;

    for(let i = 0; i < nums.length; i++) {
        
        // 0 means pos numbers
        if(i%2 === 0) {
            while(nums[posPointer] < 0) posPointer++;
            merged.push(nums[posPointer]);
            posPointer++;
        }

        // 1 means neg  numbers
        if(i%2 === 1) {
            while(nums[negPointer] > 0) negPointer++;
            merged.push(nums[negPointer]);
            negPointer++;
        }
    }

    return merged;
};