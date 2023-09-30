/**
 * DP | Recursion
 * Time O(n) | Space(n)
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
        
    nums = nums.sort((a,b) => a-b);
    const cache = new Map();
    
    const dfs = (index) => {
        
        if(cache.has(index)) return cache.get(index);
        
        if(index === nums.length) return 0;
        if(index > nums.length) return Infinity;
        
        // if we have choice between 3 and 2
        if(nums[index] === nums[index+2]) {
            cache.set(index, Math.min(1+dfs(index+3), 1+dfs(index+2)));
            return cache.get(index);
        }
        // if we have choice of only 2.
        if(nums[index] === nums[index+1]) {
            cache.set(index, 1+dfs(index+2));
            return cache.get(index);
        }
        
        cache.set(index, Infinity);
        return cache.get(index);
    }
    
    const result = dfs(0);
    if(result === Infinity) return -1;
    return result;
};