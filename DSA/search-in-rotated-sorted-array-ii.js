/**
 * 
 * Binary/Linear search
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 *  
 * Time O(n) | Space O(1)
 * the solution is combination of linear and binary search.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = left + Math.floor((right - left)/2);

        if(nums[mid] === target) return true;

        if(nums[mid] > nums[left]) {
            if(target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            continue;
        }

        if(nums[left] > nums[mid]) {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            continue;
        }

        if(nums[mid] === nums[left]) {
            left += 1;
        }
    }

    return false;
};