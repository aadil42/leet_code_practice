/**
 * Time O(n^2) | Space O(n^2)
 * DP | Recursion | Memoization
 * https://leetcode.com/problems/2-keys-keyboard/
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
        
    const cache = {};
    const dfs = (currLen, preCopyLen) => {
        const hash = `${currLen}-${preCopyLen}`;
        if(cache[hash]) return cache[hash];
        if(currLen > n) return Infinity;

        if(currLen === n) return 0;

        if(preCopyLen === 0) return 2 + dfs(currLen+currLen, currLen);

        cache[hash] = Math.min(2 + dfs(currLen+currLen, currLen), 
                        1 + dfs(currLen+preCopyLen, preCopyLen));
        return cache[hash];
    }

    return dfs(1,0);
};