/**
 * DP | Recursion | Memoization
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/uncrossed-lines/
 *  
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    
    const cache = new Map();

    const dfs = (i, j) => {
        const hash = `${i}-${j}`;

        if(cache.has(hash)) return cache.get(hash);

        let max = 0;
        for(let k = i;  k < nums1.length;  k++) {
            for(let l = j; l < nums2.length;  l++) {
                if(nums1[k] === nums2[l]) {
                    max =  Math.max(max, 1 + dfs(k + 1,l + 1));
                }
            }
        }

        cache.set(hash, max);
        return max;
    }

    return dfs(0,0);
};