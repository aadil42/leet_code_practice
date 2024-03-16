/**
 * Hashing | Counting
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/contiguous-array
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    const sumHash = {
        "0": -1
    };

    let maxLen = 0;
    let currSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) currSum++;
        if(nums[i] === 0) currSum--;

        if(currSum in sumHash) {
            maxLen = Math.max(maxLen, i - sumHash[currSum]);
        }

        if(!(currSum in sumHash)) {
            sumHash[currSum] = i;
        }
    }

    return maxLen;
};