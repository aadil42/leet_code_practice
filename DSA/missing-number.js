/**
 * Simple Logic 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/missing-number
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    // total of numbers from 1 to n using Gauss's method
    const targetTotal = (1 + nums.length)*(nums.length/2);

    // actual total of the array.
    const originalTotal = nums.reduce((acc, curr) => acc + curr, 0);

    // simple logic if actuall total sum up to the target total then we have all numbers from 
    // 1 to n, which means 0 is missing otherwise the missing number will be returned.
    return (originalTotal !== targetTotal && targetTotal - originalTotal) || 0;
};

var missingNumber1 = function(nums) {

    let n = nums.length;
    let origanalTotal = (n) * ((n+1) / 2);

    let givenTotal = 0;
    for(let i = 0; i < nums.length; i++) {
        givenTotal += nums[i];
    }

    return origanalTotal - givenTotal;
};

// xor method
var missingNumberXor = function(nums) {

    let result = 0;
    for(let i = 0; i <= nums.length; i++) {
        result = result ^ i;
    }
    for(let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumberXor(nums));


