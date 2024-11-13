/**
 * Time O(n*log(n)) | Space O(1);
 * Two Pointers | Sorting
 * https://leetcode.com/problems/count-the-number-of-fair-pairs
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {

    nums = nums.sort((a,b) => a-b);

    const countPairs = (target) => {

        let count = 0;
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] > target) {
                right--;
            } else {
                count += right - left;
                left++;
            }
        }

        return count;
    }

    return countPairs(upper) - countPairs(lower-1);
};