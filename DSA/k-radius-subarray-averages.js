/**
 * Two Pointers
 * https://leetcode.com/problems/k-radius-subarray-averages/
 * 
 * Time O(n) | Space O(n) //  because we're making an array that we'll return * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {

    if(k  === 0) return nums;
    if(k > Math.floor(nums.length/2)) return new Array(nums.length).fill(-1);
 
     let left = 0;
     let right = 2*k;
     let currentTotal = 0;
     let divider = 2*k + 1;
     let result = new Array(nums.length).fill(-1);
     // calculate current total 
     for(let i = 0; i < 2*k + 1; i++) {
         currentTotal += nums[i];
     }
 
     // calculate result
     for(let i = k; i < nums.length - k; i++) {
         result[i] = Math.floor(currentTotal / divider);
         // update total
         currentTotal -= nums[left];
         currentTotal += nums[right+1];
         left++;
         right++;
     }
 
     return result;
 };