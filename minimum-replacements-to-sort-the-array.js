/**
 * Linear iteration.
 * https://leetcode.com/problems/minimum-replacements-to-sort-the-array/
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {

    let pre = nums.length - 2;
    let currentGreatest = nums[nums.length - 1];
    let minOperation = 0;

    while(pre > -1) {
      // if pre value is greater than currentGreatest;
      if(nums[pre] > currentGreatest) {
         let parts = Math.floor(nums[pre]/currentGreatest);
          if(nums[pre]%currentGreatest) {
            parts += 1;
          }
          currentGreatest = Math.floor(nums[pre]/parts);// this part is a bit confusing to me.
          minOperation += parts - 1;
      } else {
        currentGreatest = nums[pre];
      }
      pre--;
    }    
    return minOperation;
};
