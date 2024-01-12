/**
 * Recursion
 * Time O(n) | Space O(n) 
 * Note: Without memoization the time complexity would be n^2
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    
    const hash = {};
    const numberOfLongestSequance = new Array(nums.length).fill(1);
    hash[0] = 1;
  
  
    function dfs(index) {
        if(hash[index]) return hash[index];
  
        let currentMax = 1;
  
        for(let i = index  - 1;  i >= 0; i--) {
            let preCount = dfs(i);
            if(nums[i] < nums[index]) {
                if(currentMax === preCount + 1) numberOfLongestSequance[index] += numberOfLongestSequance[i];
                if(currentMax < preCount + 1) numberOfLongestSequance[index] = numberOfLongestSequance[i];
              currentMax = Math.max(currentMax, preCount+1);  
            }
        }
  
        hash[index] = currentMax;
        return currentMax;
    }
  
    dfs(nums.length - 1);
    let maxLen = 0;
    for(const [key, value] of Object.entries(hash)) {
        maxLen = Math.max(maxLen, value);
    }
  
    let maxCount = 0;
    for(let i = 0; i < numberOfLongestSequance.length; i++) {
        if(hash[i] === maxLen) {
            maxCount += numberOfLongestSequance[i];
        }
    }
  
    return maxCount;
  };