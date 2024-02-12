/**
 * DP | Memoization | Hashing | Counting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/delete-and-earn/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
    nums.sort((a,b) => a-b);

    const dp = [];
    const frequencies = {};

    // getting frequeincies
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        frequencies[num] = (frequencies[num] && frequencies[num]+1) || 1;
    }

    // making numbers unique.
    nums = new Set(nums);
    nums = [...nums];

    for(let i = 0; i < nums.length; i++) {

        // if the previous number was just 1 less
        if(nums[i-1] + 1 === nums[i]) {
            dp[i] = Math.max(dp[i-1], (frequencies[nums[i]] * nums[i]) + (dp[i-2] || 0) );
            continue;
        }

        // we can include the previouse number
        dp[i] = (dp[i-1] || 0) + frequencies[nums[i]] * nums[i];
    }

    return dp[dp.length -1];
};

/**
 * Recursion | DP | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/delete-and-earn/
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn1 = function(nums) {
    
    nums.sort((a,b) => a-b);

    const cache = new Map();

    const dfs = (i, pre) => {
        const hash = `${i}-${pre}`;

        if(cache.has(hash)) return cache.get(hash);

        if(i >= nums.length) return 0;

        while(pre !== -1 && (nums[pre] + 1 === nums[i]) ) {
            i++;
        }

        const result = Math.max( (nums[i] || 0) + dfs(i+1, i), dfs(i+1, pre));
        cache.set(hash, result); 
        return result
    }

    return dfs(0,-1);
};