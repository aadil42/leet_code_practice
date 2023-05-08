/**
 * Linear Time
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const n2 = [...nums];
    for(let i = 0; i < nums.length; i++) {
        n2.push(nums[i]);
    }
    return n2;
};

/**
 * Linear Time
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation1 = function(nums) {
    return (nums.join(',') + ',' + nums.join(',')).split(',');
 };

 /**
  * Linear Time
  * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation2 = function(nums) {
    const n2 = [...nums];
    for(let i = 0; i < nums.length; i++) {
        n2.push(nums[i]);
    }
    return n2;
};