/**
 * Two Pointers
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var numSubseq = function(nums, target) {
    let total = 0n;
    nums = nums.sort((a,b) => a-b);
    const mod = BigInt(10**9 + 7);
    
    for(let i = 0; i < nums.length; i++) {
        let left = i;
        let right = i;
        // if there's even a one element that exceeds target when adding it twice (min+max)  [5] 5+5 > 9 so we shouln't consider anything and just break because we won't find anything now.
        if(nums[left]*2 > target) break;
        while(right < nums.length && nums[left] + nums[right] <= target) {
            right++;
        }

        // we are subtracting 1 from right because we would have gone over the subsequance by 1 // think about it.
        total += (BigInt(2)**BigInt(right - 1 - left));
        total %= mod;
    }

    return Number(total);
};

/**
 * Brute Force | Recursion 
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq1 = function(nums, target) {
    
    let total = 0;
    const mod = 10**9 + 7;
    const dfs = (i, curMin, curMax) => {
        // console.log(i, curMin, curMax);
        if(i === nums.length) {
            if(curMin + curMax <= target) total = (total + 1) % mod;
            return;
        }
        dfs(i+1, Math.min(curMin, nums[i]), Math.max(curMax, nums[i]));
        dfs(i+1, curMin, curMax);
    }

    dfs(0, Infinity, 0);
    return total;
    
};