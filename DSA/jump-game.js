/**
 * DP | DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
        
    const cache = {};

    const dfs = (idx) => {

        if(cache[idx] !== undefined) return cache[idx];

        if(idx === nums.length - 1) return true;
        if(idx >= nums.length) return false;

        for(let i = idx+1; i <= idx+nums[idx]; i++) {
            if(dfs(i)) return true;
        }

        cache[idx] = false;
        return false;
    }

    return dfs(0);
};


/**
 * Array
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump0 = function(nums) {
    
    let target = nums.length - 1;
    
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] + i >= target) {
            target = i;
        }
    }
    
    if(target == 0) return true;
    return false;
};