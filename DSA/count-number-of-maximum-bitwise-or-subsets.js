/**
 * Brute force | Recursion | DFS
 * Time O(n^n) | Space O(n)
 * https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {

    const target = nums.reduce((acc, num) => acc|num, 0);

    let count = 0;
    
    const dfs = (idx, num) => {
        if(num === target) {
            count++;
        }

        for(let i = idx;  i < nums.length; i++) {
            dfs(i+1, nums[i] | num);
        }
    }
    dfs(0,0);
    return count;
};