/**
 * Sliding Window | Hash map
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength2nd = function(nums, k) {
    
    const numFreq = {};

    let left = 0;
    let right = 0;
    let maxSubArr = 0;

    while (right < nums.length) {
        
        numFreq[nums[right]] = (numFreq[nums[right]] && numFreq[nums[right]] + 1)  || 1;

        while (left < right && numFreq[nums[right]] > k) {
            numFreq[nums[left]] -= 1;
            left++;
        }

        maxSubArr = Math.max(maxSubArr, right - left + 1);
        right++;
    }

    return maxSubArr;
};

/**
 * Hashing | Sliding Window
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength1st = function(nums, k) {
    
    const frequencies = {};

    for(let i = 0;  i < nums.length; i++) {
        frequencies[nums[i]] = 0;
    }

    let left = 0;
    let right = 0;
    let maxLen = 0;

    while(right < nums.length) {
        const num = nums[right];
        while(frequencies[num] + 1 > k) {
            const leftNum = nums[left];
            frequencies[leftNum] -= 1;
            left++;
        }
        frequencies[num] += 1;
        right++;
        maxLen = Math.max(right-left, maxLen);
    }

    return maxLen;
};