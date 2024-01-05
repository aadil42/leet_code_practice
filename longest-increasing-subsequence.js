/**
 * DP | Recursion
 * Time O(n^2) | Space O(n^2) 
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Note: The Time complexity is fine so is the space complexity. But for some reason this solution is not getting accepted on leetcode
 * // Convert this code to C++ with the help of chatGPT(make sure to use 2d array for caching) and it will get submitted.
 * // The logic of the code is fine. So, don't worry. You did good.
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {


    const cache = new Map();

    const dfs = (cur, pre) => {
        const hash = `${cur}-${pre}`;
        
        if(cache.has(hash)) return cache.get(hash);
        if(cur === nums.length) return 0;

        let max = 0;
        if(nums[cur] > nums[pre] || nums[pre] === undefined) {
            max = 1+dfs(cur+1, cur);
        } 
        
        const result = Math.max(max, dfs(cur+1, pre));
        cache.set(hash, result);
        return result;
    }

    return dfs(0, -1);
};

var lengthOfLIS1 = function(nums) {
    
const dpArray = new Array(nums.length).fill(1);

for(let i = nums.length - 1; i > -1; i--) {
    for(let j = i + 1; j < nums.length; j++) {
        if(nums[i] < nums[j]) {
            dpArray[i] = Math.max(dpArray[i], 1 + dpArray[j]);
        }
    }
}

return Math.max(...dpArray);
};

// solved second time
var lengthOfLISR2 = function(nums) {
    
    let DpArra = new Array(nums.length).fill(1);
    
    for(let i = nums.length - 1; i > -1; i--) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] < nums[j]) {
                DpArra[i] = Math.max(DpArra[i], 1 + DpArra[j]);
            }
        }
    }
    
    return Math.max(...DpArra);
};