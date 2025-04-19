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

/**
 * Sorting | Two Pointers
 * Time O(n*log(n)) | Space O(1);
 * https://leetcode.com/problems/count-the-number-of-fair-pairs
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs0 = function(nums, lower, upper) {
    
    nums = nums.sort((a,b) => a-b);

    const countPairsLessThanOrEqualToK = (target) => {

        let left = 0;
        let right = nums.length - 1;
        let count = 0;

        while (left < right) {

            if (nums[left] + nums[right] <= target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }

        return count;
    }

    return countPairsLessThanOrEqualToK(upper) - countPairsLessThanOrEqualToK(lower-1);
};