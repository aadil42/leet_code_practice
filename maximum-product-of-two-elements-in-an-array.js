/**
 * Array | Iteration
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const factorA = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    const factorB = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    return (factorA-1) * (factorB-1);
};