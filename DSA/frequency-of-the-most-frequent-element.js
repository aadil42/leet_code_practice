/**
 * Sliding Window | Sorting | Math
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {

    let left = 0;
    let right = 0;
    let currSum = 0;
    let maxFreq = 0;

    nums  = nums.sort((a,b) => a-b);

    while (right < nums.length) {
        
        const currMax = nums[right];
        currSum += nums[right];

        while (left < right && currSum + k < currMax*(right-left+1)) {
            currSum -= nums[left];
            left++;
        }
        
        maxFreq = Math.max(maxFreq, right-left+1);
        right++;
    }

    return maxFreq;
};

/**
 * Brute Force 
 * Time O(n^2) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequencyBF = function(nums, k) {

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
 * Two Pointer | Sorting
 * Time O(n*log(n)) | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency0 = function(nums, k) {

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
  