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
  