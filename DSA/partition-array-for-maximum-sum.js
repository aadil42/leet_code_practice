/**
 * DP | Recursion | Memoization
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/partition-array-for-maximum-sum
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    
    const cache = new Map();

    const dfs = (i) => {
        if(cache.has(i)) return cache.get(i);
        // if(i >= arr.length) return 0; // we can return it too. but it's redundent. 
        // because we're not even making the next call if the  itarator  is equal to the length.
        // check the forloop for more understanding.
        
        let max = 0;
        let currentMax = 0;

        let count = 1;
        for(let j = i; j < i+k; j++) {
            if(j === arr.length) break;
            currentMax = Math.max(currentMax, arr[j]);
            max = Math.max(max,  currentMax*count + dfs(j+1));
            count++;
        }

        cache.set(i, max);
        return max;
    }

    return dfs(0);
};