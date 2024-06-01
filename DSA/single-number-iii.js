/**
 * Bit Manipulation
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/single-number-iii
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {

    let overAllXor = 0;
    let i  = 0;

    const bitInPosition = (num, pos) => {
        while(pos > 0) {
            num = num >> 1;
            pos--;
        }
        return num & 1;
    }

    while(i < nums.length) {
        overAllXor ^= nums[i];
        i++;
    }

    i = 0;
    while( !((overAllXor >> i) & 1) ) {
        i++;
    }

    const differBitPosition = i;

    let num1 = 0;
    let num2 = 0;

    i = 0;
    while(i < nums.length) {
        const num = nums[i];
        if(bitInPosition(num, differBitPosition)) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
        i++;
    }

    return [num1, num2];
};