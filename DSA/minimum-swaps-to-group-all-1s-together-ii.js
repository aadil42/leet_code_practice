/**
 * Sliding Window | Counting | Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    
    let ones = 0;
    const totalOnes = nums.filter((num) => num===1).length;
    ones = nums.slice(0, totalOnes).filter((num) => num===1).length;

    let left = 0;
    let right = totalOnes - 1;
    let min = Infinity;

    nums = [...nums, ...nums];
    while(right < nums.length) {
        min = Math.min(min, totalOnes-ones);
        if(nums[left] === 1) ones--;
        left++;
        right++;
        if(nums[right] === 1) ones++;
    }
    
    return min;
};