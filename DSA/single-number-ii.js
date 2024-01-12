/**
 * https://leetcode.com/problems/single-number-ii/
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
  
    for (let i = 0; i < 32; i++) {
      let ones = 0;
      for (let j = 0; j < nums.length; j++) {
        if (((nums[j] >> i) & 1) === 1) {
          ones++;
        }
      }
      const isMultipleOfThree = !(ones % 3);
      if (!isMultipleOfThree) {
        ans |= (1 << i);
      }
    }
  
    return ans;
  };
  

/**
 * Hashing
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {

    const hash = {};
  
    for(let i = 0; i < nums.length; i++) {
      if(hash[nums[i]]) {
        hash[nums[i]] += 1;
      } else {
        hash[nums[i]] = 1;
      }
    }
  
    console.log(hash);
    for(const [key, value] of Object.entries(hash)) {
      if(value === 1) return key;
    }
    
  };