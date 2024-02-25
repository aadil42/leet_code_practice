/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    if(nums.length === 1) return nums[0];

    let left = 0;
    let right  = nums.length - 1;

    while(left <= right)  {

        const mid = left + Math.floor((right-left)/2);

        const rightEl = (nums[mid+1] !== undefined && nums[mid+1]) || Infinity;
        const leftEl = (nums[mid-1] !== undefined && nums[mid-1]) || -Infinity;

        if(nums[mid] < rightEl && nums[mid] >  leftEl) return nums[mid];

        numberOfEl = (mid - left) + 1;
        
        // the meat of the code.
        if(numberOfEl%2) {
            if(nums[mid] === rightEl) {
                left = mid;
            } else {
                right = mid;
            }
        } else {
            if(nums[mid] === rightEl) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }


};