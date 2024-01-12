// better solution.
/**
 * Linear 
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums) => {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        const [leftVal, rightVal] = [nums[left], nums[right]];

        const isEqual = (rightVal === leftVal);
        if (!isEqual) {
            left++;
            nums[left] = rightVal;
        }

        right++;
    }

    return (left + 1);
};


/**
 * Sorting | Two Pointer
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
    
    
    let left = 0;
    let right = left+1;

    let k = 0;
    while(left < nums.length) {
        while(right < nums.length && nums[left] === nums[right]) right++;
        while(right - left > 1) {
            k++;
            nums[left] = Infinity;
            left++;
        }

        left = right;
        right++;
    }
    nums = nums.sort((a,b) => a-b);
    return nums.length - k;
};

/**
 * Array 
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates2 = function(nums) {
    
    let left = 0;
    let right = 1;
    let delCount = 0;

    while(right <= nums.length) {
        if(nums[left] === nums[right]) {
            right++;
            delCount++;
        } else {
            // this  thing will make it n^2
            nums.splice(left + 1, delCount);
            delCount = 0;
            left++;
            right = left + 1; 
        }
    }
};


var removeDuplicates3 = function(nums) {
    
    let i = 0;
    let j = 1;
        
        do{
            if(nums[i] === nums[i+j]) {
                j++;
            } else {
                nums.splice(i + 1, j - 1);
                j = 1;
                i++;
            }
        }while(i < nums.length - 1);
        
        return nums.length;
};

