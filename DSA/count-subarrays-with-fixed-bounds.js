/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    
    let count = 0;
    for(let i = 0; i < nums.length;  i++) {
        for(let j = 0; j < nums.length; j++) {
            const currMin = Math.min(...nums.slice(i,j+1));
            const currMax = Math.max(...nums.slice(i,j+1));
            if(currMin === minK && currMax === maxK) count++; 
        }
    }

    return count;
};