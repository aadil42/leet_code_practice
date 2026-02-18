/**
 * binary search
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    if (nums.length === 1) return nums[0];
    if (nums[nums.length - 1] > nums[0]) return nums[0];

    let min = Infinity;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        mid = left + Math.floor((right - left)/2);

        min = Math.min(min, nums[left], nums[mid], nums[right]);
        if (nums[mid] > nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return min;
};