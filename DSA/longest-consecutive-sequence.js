// by consecutive they mean things that are only increasing by 1. so 1 2 3 4 is valid but 100 200 300 is not.

var longestConsecutive = function(nums) {
    
    if(!nums.length) return 0;

    const numberSet = new Set();

    nums.forEach((number) => {
        numberSet.add(number);
    });

    let currentMax = 1;
    let maxSequence = 1;
    nums.forEach((num) => {
        if(!numberSet.has(num - 1)) { // this condition is pretty important look at it closly. 
            let current = num;
            while(numberSet.has(++current)) {
                currentMax++;
                maxSequence = Math.max(currentMax, maxSequence);
            }
        }
        currentMax = 1;
    });

    return maxSequence;
};
// 1 2 3 4 5
const nums =   [100,4,200,1,3,2];
// const nums = [0,-1];

console.log(longestConsecutive(nums));


/**
 * Hash
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/longest-consecutive-sequence/submissions/1849248811/
 * @param {number[]} nums
 * @return {number}
 */

//  for revision
var longestConsecutiveR = function(nums) {

    const numSet = new Set(nums);
    nums = [...new Set(nums)];
    let max = 0;

    for (let i = 0; i < nums.length; i++) {

        const num = nums[i];
        let start = num;

        while (numSet.has(start-1)) start--;

        let currMax = 0;
        while (numSet.has(start)) {
            currMax++;
            numSet.delete(start);
            start++;
        }

        max = Math.max(currMax, max);
    }

    return max;
};