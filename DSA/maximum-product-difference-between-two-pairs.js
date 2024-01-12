/**
 * Math | Array
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
    let max1 = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    let max2 = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    let min1 = nums.splice(nums.indexOf(Math.min(...nums)), 1);
    let min2 = nums.splice(nums.indexOf(Math.min(...nums)), 1);

    max1 = max1[0];
    max2 = max2[0];
    min1 = min1[0];
    min2 = min2[0];

    return max1*max2 - min1*min2;
};