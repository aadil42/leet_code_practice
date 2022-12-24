/**
 * Linear Time
 * Time Complexity  O(N) | Space Complexity O(N);
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesLinearSpace = function(nums) {

    const zeroAtTheEnd = Array(nums.length).fill(0);
    let left = 0;
    let right = zeroAtTheEnd.length - 1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            right--;
        } else {
            zeroAtTheEnd[left] = nums[i];
            left++;
        }
    }

    return zeroAtTheEnd;
};

const nums = [0];
console.log(moveZeroes(nums));

function swap(i,j,nums) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

/**
 * Linear Time
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 */
 var moveZeroesLinearSpace = function(nums) {

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
