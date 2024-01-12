/**
 * Linear Iteration
 * https://leetcode.com/problems/summary-ranges/
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // iterate over the array.
    // make result array.
    // go untill the difference is not 1.
    // then cut the range and push  it in result
    if(!nums.length) return [];
    const res = [];
    let start = nums[0];
    for(let i = 1;  i < nums.length; i++) {
        if(nums[i] - nums[i-1] !== 1) {
            console.log(nums[i], nums[i-1]);
            if(start === nums[i-1]) {
                res.push(start.toString()); 
            } else {
                res.push(`${start}->${nums[i-1]}`);
            }
            start = nums[i];
        }
    }

    // this is an edge case for the last range.
    if(start === nums[nums.length - 1]) {
        res.push(start.toString());
    } else {
        res.push(`${start}->${nums[nums.length - 1]}`);
    }
    return res;
};