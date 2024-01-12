/**
 * Brute Force 
 * Time O(n^2) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequency = function(nums, k) {

    nums.sort((a,b) => a-b);
  
    let maxFrequency = 0;
  
    for(let i = nums.length - 1; i  > -1; i--) {
  
       maxFrequency = Math.max(getMaxFrequency(i,k,nums), maxFrequency);
    }
  
    return maxFrequency;
  };
  
  function getMaxFrequency(i,k,nums) {
  
      const matchingNumber = nums[i];
      let max = 1;
  
      while(k > 0) {
      const prevNumber = nums[i-1];
      if(k >= matchingNumber - prevNumber) {
          max++;
      }
      k -= matchingNumber - prevNumber;
      i--;
      }
  
      return max;
  }
  
  /**
 * Two Pointer
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {

    nums.sort((a,b) => a-b);
  
    let left = 0;
    let right = 0;
    let maxFreq = 0;
    let currentTotal = 0;
  
  
    while(right < nums.length) {
        const targetSum = nums[right];
        const windowLen = right - left + 1;
        currentTotal += nums[right];
        if(targetSum * windowLen <= currentTotal + k) {
            maxFreq = Math.max(windowLen, maxFreq);
            right++;
        } else {
            currentTotal -= nums[left];
            right++;
            left++;
        }
      }
  
      return maxFreq;
  };
  