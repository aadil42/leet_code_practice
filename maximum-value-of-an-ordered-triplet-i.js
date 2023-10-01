/**
 * Brute force. 
 * time O(n^3) | Space O(1)
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    const calcVal = (i,j,k) => {
        if((nums[i] - nums[j]) * nums[k] < 0) return 0;
        return (nums[i] - nums[j]) * nums[k];
    }
    
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1;  j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                max = Math.max(max, calcVal(i,j,k));
            }
        }
    }
    
    return max;
};