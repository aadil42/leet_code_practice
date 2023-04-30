/**
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    result = nums[0];
    for(let i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};