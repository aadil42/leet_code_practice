/**
 * Sorting
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    
    let right = nums.length - 1;
    let currentMax = nums[nums.length - 1];
    let currentLen = 0;

    let totalOperations = 0;

    nums.sort((a,b) => a-b);
    
    while(right > 0) {
        while(nums[right] === currentMax) {
            right--;
            currentLen++;
        }

        if(right >= 0) {
            totalOperations += currentLen;
        }

        currentMax = nums[right];
    }

    return totalOperations;
};