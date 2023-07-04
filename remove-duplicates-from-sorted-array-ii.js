/**
 * Leaner time.
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = nums[0];
    let sameElCount = 0;

    for(let i = 0; i < nums.length; i++) {
      if(current === nums[i]) {
          sameElCount++;
      } 
      if(current !== nums[i]) {
          current = nums[i];
          sameElCount = 1;
      }
     if(sameElCount > 2) {
          nums[i] = '#';
      }
    }

    // filter out #
    for(let i = 0; i < nums.length; i++) {
        while(i < nums.length && nums[i] === '#') {
            nums.splice(i, 1);
        }
    }

    console.log(nums);
    return nums.length;
};

/**
 * 
 * Less code 
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
    let current = nums[0];
    let sameElCount = 0;

    for(let i = 0; i < nums.length; i++) {
      if(current === nums[i]) {
          sameElCount++;
      } 
      if(current !== nums[i]) {
          current = nums[i];
          sameElCount = 1;
      }
     if(sameElCount > 2) {
         nums.splice(i,1);
         i--;
      }
    }
};

/**
 * Two pointer
 * Time O(n^2) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {

    let current = nums[0];
    let sameElCount = 0;


    for(let i = 0; i < nums.length; i++) {
      if(current === nums[i]) {
          sameElCount++;
      } 
      if(current !== nums[i]) {
          current = nums[i];
          sameElCount = 1;
      }
      if(sameElCount > 2) {
          // two pointer approch
          let left = i;
          let right = i+1;
          let count = 1;
          while(nums[left] === nums[right]) {
              count++;
              right++;
          }
          nums.splice(left, count);
        //   console.log(nums);
          i--;
      }
    }
    return nums.length;
};