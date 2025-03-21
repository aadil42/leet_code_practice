/** Recursion, memoization
 * Time O(m*n) where n = nums.length and m = target;
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    const cache = new Map();

    function dfs(i, total) {
        const key = i + "-" + total;
        if(cache.has(key)) return cache.get(key);

        if(i === nums.length) {
            if(total === target) return 1;
            return 0;
        }

        const result = (dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i])); 
        cache.set(key, result);
        return cache.get(key);
        // return cache[i+"-"+total];
    }

    return dfs(0,0);
};

/**
 * BackTrack | Brute Force
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/target-sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays0 = function(nums, target) {    
    let total = 0;
    const dfs = (i, currTotal) =>  {
        if(i === nums.length && currTotal === target) {
            total += 1;
            return;
        }
        if(i === nums.length) return;

        dfs(i+1, currTotal+nums[i]);
        dfs(i+1, currTotal-nums[i]);
    }

    dfs(0,0);
    return total;
};