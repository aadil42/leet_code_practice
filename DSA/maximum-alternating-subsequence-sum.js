/**
 * Recursion
 * Time O(n*2) | Space O(n*2)
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    
    const cache = {};
    function dfs(i, isEven) {
        const key = i+'-'+isEven;
        if(cache[key]) return cache[key];
        if(i === nums.length) return 0;

        let total = 0;
        isEven ? total = nums[i] : total = -1 * nums[i];
        console.log(total, isEven);
        cache[key] = Math.max(total + dfs(i+1, !isEven), dfs(i+1, isEven));        
        return cache[key];
    }

    const result = dfs(0, true);
    console.log(cache);
    return result;
};