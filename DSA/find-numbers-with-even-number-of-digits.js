/**
 * Array 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums
           .filter((num) => num.toString().length % 2 === 0)
           .length;
};