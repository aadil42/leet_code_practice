/**
 * Brute Force
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/maximum-strong-pair-xor-i/
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    
    const strongPairs = [];
    
    const isStrong = (num1, num2) => Math.abs(num1 - num2) <= Math.min(num1, num2);
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(isStrong(nums[i], nums[j])) strongPairs.push([ nums[i], nums[j] ]);
        }
    }
    
    
    let max = -Infinity;
    
    for(let i = 0; i < strongPairs.length; i++) {
        max = Math.max(max, strongPairs[i][0] ^ strongPairs[i][1]);
    }
    
    return max;
};