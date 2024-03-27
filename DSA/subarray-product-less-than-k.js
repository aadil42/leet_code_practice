/**
 * Array | Sliding Window
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/subarray-product-less-than-k
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    if(!k) return 0;

    const gaussTotal = (n) => {
        return (1 + n) * (n/2); 
    }

    let left = 0;
    let right = 0;

    let currProduct = 1;
    let totalSubArrays = 0;
    let overLap = 0;

    while(right < nums.length) {
        while(currProduct * nums[right] < k) {
            currProduct *= nums[right];
            right++;
        }
        
        // add total subArrays.
        totalSubArrays += gaussTotal(right-left) - gaussTotal(overLap);

        while(currProduct*nums[right] >= k) {
            currProduct = Math.max(1, currProduct/nums[left]);
            left++;
            right = Math.max(left, right);
        }
        overLap = right - left;
    }
    
    return totalSubArrays;
};