/**
 * Sorting 
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a,b) => a-b);
    let idx = 0;
    for(let i = 0; i < 1001; i++) {
        while(idx < nums.length && nums[idx] < i) {
            idx++;
        }
        if(idx < nums.length && 
           nums[idx] >= i && 
           i === nums.length - idx) {
            return i;
        }
    }
    return -1;
};

/**
 * BruteForce 
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x
 * @param {number[]} nums
 * @return {number}
 */
var specialArray0 = function(nums) {
    
    const checkValidity = (num) => {
        let count = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] >= num) count++;
            if(count > num) return false;
        }

        return num === count;
    }

    for(let i = 0; i < 1001; i++) {
        if(checkValidity(i)) return i;
    }

    return -1;
};