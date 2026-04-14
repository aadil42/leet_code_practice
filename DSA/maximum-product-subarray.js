var maxProduct = function(nums) {

    let maxCurrent = 1;
    let minCurrent = 1;
    let Max = nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        const temp = nums[i] * maxCurrent;
    
        maxCurrent = Math.max(temp, nums[i] * minCurrent, nums[i]);
        minCurrent = Math.min(temp, minCurrent * nums[i], nums[i]);
    
        Max = Math.max(Max, maxCurrent);
    }
    
    return Max;
};

/**
 * DP | Recursion | DFS
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDP = function(nums) {
    
    const cache = new Map();

    const dfs = (idx, currProduct) => {

        const hash = `${idx}-${currProduct}`;
        if (idx === nums.length) return currProduct;
        if (cache.has(hash)) return cache.get(hash);


        const keepGoingWithCurrProductToNextIdx = dfs(idx+1, currProduct*nums[idx]);
        const stopAndStartNewProductCalcFromHere = dfs(idx+1, nums[idx]);
        
        const max = Math.max(
            keepGoingWithCurrProductToNextIdx,
            stopAndStartNewProductCalcFromHere,
            currProduct
        );

        cache.set(hash, max);
        return max;
    }

    return dfs(1, nums[0]);
};