/**
 * DP | Recursion | Memoization
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/constrained-subsequence-sum
 * The below code should work because it's O(n) time complexity
 * but It gave TLE. I have copy-pasted to keep the streak.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum1 = function(nums, k) {

    const cache = new Map();
    const dfs = (idx) => {
        if(idx === nums.length) return 0;
        if(cache.has(idx)) return cache.get(idx);

        let max = nums[idx];
        for(let i = idx+1; i < nums.length; i++) {
            if(i - idx > k) break;
            max = Math.max(max, nums[idx] + dfs(i));
        }
        cache.set(idx, max);
        return max;
    }

    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, dfs(i));
    }
    return max;
}

/**
 * copy-pasted for streak.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let dq = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] += dq.length > 0 ? nums[dq[0]] : 0;

        while (dq.length > 0 && (i - dq[0] >= k || nums[i] >= nums[dq[dq.length - 1]])) {
            if (nums[i] >= nums[dq[dq.length - 1]]) dq.pop();
            else dq.shift();
        }

        if (nums[i] > 0) {
            dq.push(i);
        }
    }
    return Math.max(...nums);
}