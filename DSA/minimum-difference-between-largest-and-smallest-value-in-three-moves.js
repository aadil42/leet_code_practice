/**
 * 
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves
 * Recursion | Backtracking
 * Time O(2^3) | Space O(2^3) constant time and space
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {

    if(nums.length <= 4) return 0;
    nums.sort((a,b) => a-b);

    let min = nums[nums.length - 1] - nums[0];
    const dfs = (start, end, choiceLeft) => {
        if(choiceLeft < 0) return;

        min = Math.min(min, nums[end] - nums[start]);
        let originalLast = nums[end];
        let originalFirst = nums[start];

        nums[start] = nums[end];
        dfs(start+1, end, choiceLeft-1);
        nums[start] = originalFirst;

        nums[end] = nums[start];
        dfs(start, end-1, choiceLeft-1);
        nums[end] = originalLast;
    }

    dfs(0, nums.length - 1, 3);
    return min;
};