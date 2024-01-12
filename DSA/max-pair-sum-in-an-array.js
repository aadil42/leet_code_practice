/**
 * Brute force.
 * 
 * https://leetcode.com/problems/max-pair-sum-in-an-array/
 * Time O(n^2) | Space O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    nums = nums.sort((a,b) => a-b);
    
    const isBiggestDigitSame = (num1, num2) => {
        num1 = num1 + '';
        num1 = num1.split('');
        num2 = num2 + '';
        num2 = num2.split('');
        
        const biggestNum1 = num1.reduce((acc, curr) => {
            return Math.max(acc, +curr); 
        },0);
        
        const biggestNum2 = num2.reduce((acc, curr) => {
            return Math.max(acc, +curr); 
        },0);
        
        return biggestNum2 === biggestNum1;
    }
    
        
    let maxNum = -1;
    for(let i = nums.length - 1; i > -1; i--) {
        for(let j = i - 1; j > -1; j--) {
            if(isBiggestDigitSame(nums[i], nums[j])) {
                maxNum = Math.max(maxNum, nums[i] + nums[j]);       
                break;
            }   
        }
    }
    
    return maxNum;
};