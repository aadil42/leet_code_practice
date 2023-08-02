/**
 * Recursion | Backtracking
 * 
 * https://leetcode.com/problems/permutations/
 * Time O(n^n) | Space O(n!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const result = [];
    const dfs = (numSet) => {
        if(numSet.size === nums.length) {
            result.push([...numSet]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(numSet.has(nums[i])) continue;
            numSet.add(nums[i]);
            dfs(numSet);
            numSet.delete(nums[i]);
        }
    }

    dfs(new Set());
    return result;
};
/**
 * 
 * Recursion 
 * Time  O(n!) | Space O(n!) 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function(nums) {
    function dfs(nums) {
        if(nums.length === 1) return [nums.slice(0)];

        const result = [];
        for(let i = 0; i < nums.length; i++) {
            const n = nums.shift();
            const permutations = dfs(nums);
            permutations.forEach((permutation) => {
                result.push([...permutation, n]);
            });
            nums.push(n);
        }
        return result;
    } 

    return dfs(nums);
};