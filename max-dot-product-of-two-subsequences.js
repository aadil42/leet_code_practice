/**
 * DP | memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/max-dot-product-of-two-subsequences
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    
    const cache = new Map();
    const dfs = (idx1, idx2, taken) => {

        if(idx1 === nums1.length && taken) return 0;
        if(idx2 === nums2.length && taken) return 0;
        if(idx1 === nums1.length) return -Infinity;
        if(idx2 === nums2.length) return -Infinity;

        const hash = `${idx1}-${idx2}-${taken}`;
        if(cache.has(hash)) return cache.get(hash);

        const result = Math.max(nums1[idx1] * nums2[idx2] + dfs(idx1+1, idx2+1, true),
                                dfs(idx1+1, idx2, taken),
                                dfs(idx1, idx2+1, taken),
                                dfs(idx1+1, idx2+1, taken));

        cache.set(hash, result);
        return result;                                
    }

    return dfs(0,0,0);
};