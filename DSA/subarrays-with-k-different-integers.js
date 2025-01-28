/**
 * Sliding-window | Two-pointer 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/subarrays-with-k-different-integers/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    
    const subArrayWithLessThanKDistinct = (nums, k) => {
        
        if (k === 0) return 0;

        const freqMap = new Map();

        let left = 0;
        let right = 0;
        let total = 0;

        while (right < nums.length) {

            if (freqMap.has(nums[right])) {
                const oldCount = freqMap.get(nums[right]);
                freqMap.set(nums[right], oldCount+1);
            } else {
                freqMap.set(nums[right], 1);
            }

            while (left < right && freqMap.size > k) {

                const leftChar = nums[left];
                const newCount = freqMap.get(leftChar) - 1;

                if (!newCount) {
                    freqMap.delete(leftChar);
                } else {
                    freqMap.set(leftChar, newCount);
                }
                left++;
            }   

            total += (right - left + 1);
            right++;
        }

        return total;
    }

    return subArrayWithLessThanKDistinct(nums, k) - subArrayWithLessThanKDistinct(nums, k-1); 
};