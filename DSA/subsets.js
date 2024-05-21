/**
 * Backtracking | recursion | DFS
 * Time O(2^n * n) | Space O(2^n * n)
 * https://leetcode.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    const allSubs = [[]];

    const dfs = (i, arr) => {
        if(i === nums.length) return;
        arr.push(nums[i]);
        allSubs.push(arr.slice());
        dfs(i+1, arr);
        arr.pop();
        dfs(i+1, arr);
    }

    dfs(0, []);
    return allSubs;
};

/**
 * Recursion
 * Time O(n*2^n) | Space O(2^n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets0 = function(nums) {
    
    const result = [];
    function dfs(i, numArr) {
        if(i === nums.length) {
            result.push(numArr);
            return;
        }

        const leftArr = numArr.slice(0);
        leftArr.push(nums[i]);
        dfs(i+1, leftArr);
        dfs(i+1, numArr.slice(0));
    }

    dfs(0, []);
    return result;
};