/**
 * DP | Recursion
 * Time O(n*m) | Space O(n)
 * https://leetcode.com/problems/combination-sum-iv
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    
    const cache = new Map();
    const dfs = (remaining) => {
        if(cache.has(remaining)) return cache.get(remaining);
        if(remaining < 0) return 0;
        if(remaining === 0) return 1;
        
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            returnedVal = dfs(remaining - nums[i]);
            count += returnedVal;
        }
        cache.set(remaining, count);
        return count;
    }

    return dfs(target);
};