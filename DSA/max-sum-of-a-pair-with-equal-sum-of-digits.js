/**
 * Sorting 
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    
    nums = nums.map((num) => {
        return [getDigitsSum(num), num];
    });

    nums = nums.sort((a,b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return b[0] - a[0];
    });

    console.log(nums);
    let max = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i][0]  === nums[i-1][0]) {
            max = Math.max(max, nums[i][1] + nums[i-1][1]);
        }
    }    

    return max || -1;
};

const getDigitsSum = (num) => {
    return num
          .toString().split("")
          .map((n) => +n)
          .reduce((acc, curr) => acc+curr, 0);
}