/**
 * DP | Recursion | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

    const total = nums.reduce((acc, num) => acc+num, 0);

    if(total%2) return false;

    const cache = new Map();

    const dfs = (i, leftNum) => {
        const hash = `${i}-${leftNum}`;

        if(cache.has(hash)) return cache.get(hash);

        if(leftNum === 0) return true;
        if(i === nums.length || leftNum < 0) return false;

        const result = dfs(i+1, leftNum - nums[i]) || dfs(i+1, leftNum);
        cache.set(hash, result);

        return result;
    }

    return dfs(0, total/2);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition1 = function(nums) {
    
    if(sum(nums) % 2) return false;
    const target = sum(nums) / 2;

    let dp = new Set();
    dp.add(0);
    for(let i = 0; i < nums.length; i++) {
        const nextDp = new Set();
        for(let data of dp) {
            nextDp.add(data + nums[i]);
            nextDp.add(data);
        }
        dp = nextDp;
    }

    function sum(arr) {
        return arr.reduce((acc, curr) => {
            return acc + curr;
        },0);
    }
    return dp.has(target) ?  true : false;
};