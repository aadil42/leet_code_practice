// brute force O(n^2)
var checkSubarraySum1 = function(nums, k) {
    
    for(let i = 0; i < nums.length; i++) {
        if(multipleOf(i,nums,k)) return true;
    }

    return false;
};

function multipleOf(i,nums,k) {

    let result = nums[i];
    for(let j = i + 1; j < nums.length; j++) {
       result *= nums[j];
       console.log(result);
       if(!(result%k)) return true;
    }
    return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 *  Hasing | Math.
 *  Time O(n) | Space O(n)
 *  https://leetcode.com/problems/continuous-subarray-sum/
 *  Think about it. if the same remainder appear again in the on going total 
 *  that must mean there's a subarray that adds up to a sum that 
 *  is multiple of k.
 */
var checkSubarraySum = function(nums, k) {
    if(nums.length < 2) return false;
 
     const remainderHash = {};
     remainderHash[0] = -1;
 
     let total = 0;
     for(let i = 0; i < nums.length; i++) {
         total += nums[i];
         if(remainderHash[total%k] !== undefined) {
             if(i - remainderHash[total%k] > 1) return true;
         } else {
             console.log(total%k, i);
             remainderHash[total%k] = i;
         }
     }
     console.log(remainderHash);
     return false;
 };