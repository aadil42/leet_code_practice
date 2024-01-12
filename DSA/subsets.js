/**
 * Recursion
 * Time O(n*2^n) | Space O(2^n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
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