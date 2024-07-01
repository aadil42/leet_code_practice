/**
 * DP | DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    const cache = {};

    const dfs = (idx) => {
        if(cache[idx]) return cache[idx];
        if(idx >= nums.length) return Infinity;
        if(idx === nums.length - 1) return 0;

        let min = Infinity;
        for(let i = idx+1; i <= idx+nums[idx]; i++) {
            min = Math.min(min, 1+dfs(i));
        }

        cache[idx] = min;
        return min;
    }

    return dfs(0);
};

/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */

var jump0 = function(nums) {

    let left = 0;
    let right = 0;
    let result = 0;

    while(right < nums.length - 1) {
        let longest = 0;
        for(let i = left; i < right + 1; i++) {
            longest = Math.max(longest, nums[i] + i);
        }
        left = right + 1;
        right = longest;
        result++;
    }
    return result;
};















