/**
 * Binary Search
 * https://leetcode.com/problems/search-in-rotated-sorted-array
 * 
 * Time O(log(n)) | Space O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
     let right =  nums.length - 1;
 
     // find the smallest element
     while(left < right) {
 
         const mid = Math.floor((right + left) / 2);
 
         if(nums[mid] > nums[right]) {
             left = mid + 1;
         } else {
             right = mid;
         }
     }
 
     // finding the part in which we'll be performing binary search
     if(target > nums[nums.length - 1]) {
         left = 0;
         right = right  - 1;
     } else {
         right = nums.length - 1;
     }
 
     // doing the binary search on the proper portion of the array.
     while(left <= right) {
         const mid = Math.floor((left + right) /2);
         if(target === nums[mid]) {
             return mid;
         } else if(target > nums[mid])  {
             left = mid + 1;
         } else {
             right = mid - 1;
         }
     }
 
     return -1;
 };
 
 /**
 * binary search (also did little bit of combinotorics) (it is difficult to grasp compared to previouse solution)
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/1924628516/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search0 = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;

    const isIncreasing = (left, right, nums) => {
        if (nums[left] <= nums[right]) return true;
        return false;
    }

    while (left <= right) {

        const mid = left + Math.floor((right - left)/2);

        if (nums[mid] === target) return mid;

        if (isIncreasing(left, mid, nums)) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};


// left half is increasing 
   // target is between 
   // target is not between

// left half is not increasing
   // target is between 
   // target is not between