/**
 * Binary Search
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
  const binarySearch = (searchD) => {

      let left = 0;
      let right = nums.length - 1;
      let index = searchD ? -Infinity : Infinity;

      while(left <= right) {
          const mid = left + Math.floor((right - left)/2);

          if(nums[mid] === target) {
              if(searchD) {
                  index = Math.max(index, mid);
                  left = mid + 1;
              }
              if(!searchD) {
                  index = Math.min(index, mid);
                  right = mid - 1;
              }
          }

          if(target > nums[mid]) {
              left = mid + 1;
          }

          if(target < nums[mid]) {
              right = mid - 1;
          }
      }

      return index;
  }

  const startIdx = binarySearch(0);
  const endIdx = binarySearch(1);
  // console.log(startIdx, endIdx)
  if(startIdx === Infinity || endIdx === -Infinity) return [-1,-1];
  return [startIdx, endIdx];
};

/**
 * Binary Search
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Time O(log(n)) | Space O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function(nums, target) {
    
    const result = [];

    result.push(binarySearch(true));
    result.push(binarySearch(false));

    function binarySearch(leftBias) {
      let left = 0;
      let right = nums.length - 1;
      let index = -1;

      while(left <= right) {
        
        const mid = Math.floor((left+right)/2);

        if(target > nums[mid]) {
          left = mid+1;
        }
        if(target < nums[mid]) {
          right = mid-1;
        }
        // this is the meat of the code
        if(target === nums[mid]) {
          if(leftBias) {
            index = mid;
            right = mid - 1;
          } else {
            index = mid;
            left = mid + 1;
          }
        }
      }

      return index;
    }

    return result;
};