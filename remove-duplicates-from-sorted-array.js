/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    
    let left = 0;
    let right = 1;
    let delCount = 0;

    while(right <= nums.length) {
        if(nums[left] === nums[right]) {
            right++;
            delCount++;
        } else {
            nums.splice(left + 1, delCount);
            delCount = 0;
            left++;
            right = left + 1; 
        }
    }
};

var removeDuplicates = function(nums) {
    
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