/**
 * 
 * DP | Recursion
 * 
 * https://leetcode.com/problems/predict-the-winner/
 * Time O(n^2) | Space O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    
    const cache = {};
    const dfs = (start, end) => {
        if(start === end) return nums[start];
        const hash = `${start}-${end}`;
        if(cache[hash]) return cache[hash];
        if(start > end) return 0;
        return cache[hash] = Math.max(nums[start] +  Math.min(dfs(start+2, end), dfs(start+1, end-1)), 
                                      nums[end] + Math.min(dfs(start, end - 2), dfs(start+1, end-1)));

    }

    const p1Score =  dfs(0, nums.length - 1);
    const totalScore = nums.reduce((acc, num) => acc+num);
    return p1Score >= (totalScore - p1Score);
};