/**
 * Array | Two pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let left = 0;
    let right = 0;

    while(right < nums.length) {
        while(nums[right] === 0) {
            right++;
        }
        if(right === nums.length) break;
        [nums[left], nums[right]] = [nums[right], nums[left]]; // swapping
        left++;    
        right = Math.max(right, left);
    }
};


/**
 * Linear Time
 * Time Complexity  O(N) | Space Complexity O(1);
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) {

    let [left, right] = [0, 1];
    
    while(right < nums.length) {
        if(nums[left]) {
            right++;
            left++;
        } else if (!nums[left] && nums[right]) {
            swap(left,right,nums);
            left++;
            right++;
        } else {
            right++;
        }
       
    }
    
};

function swap(i,j,nums) {
[nums[i], nums[j]] = [nums[j], nums[i]];
}

/**
 * Linear Time
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 */
 var moveZeroes2 = function(nums) {

    const zeroAtTheEnd = Array(nums.length).fill(0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            zeroAtTheEnd[left] = nums[i];
            left++;
        }
    }
    return zeroAtTheEnd;
};
