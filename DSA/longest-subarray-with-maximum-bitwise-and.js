/**
 * Bit | subArray | array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);
    let maxLen = 1;

    let i = 0;
    while(i < nums.length) {
        let len = 0;
        let mySwitch = false;
        
        while(i < nums.length && nums[i] === max) {
            i++;
            len++;
            mySwitch = true;
        }

        maxLen = Math.max(maxLen, len);
        if(!mySwitch) i++;
    }
    return maxLen;
};