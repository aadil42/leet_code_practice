/***
 * BackTracking | Recursion | DFS
 * Time O(n!) | Space O(n)
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    
    let resultXor = 0;

    const dfs = (arr, i) => {
        if(i === nums.length) return;
        arr.push(nums[i]);
        resultXor += arr.reduce((acc, num) => num^acc, 0);
        dfs(arr, i+1);
        arr.pop();
        dfs(arr, i+1);
    }

    dfs([], 0);

    return resultXor;
};