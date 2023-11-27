/**
 * Recursion | DP
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/knight-dialer
 * 
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    
    const mod = 10**9 + 7;
    const digitJumps = [
        [4,6],
        [8,6],
        [7,9],
        [4,8],
        [9,3,0],
        [],
        [7,1,0],
        [2,6],
        [1,3],
        [4,2]
    ];

    const cache = {};

    const dfs  = (remain, cell) => {
        const hash = `${cell}-${remain}`;
        if(cache[hash]) return cache[hash];

        if(remain === 0) return 1;

        let ans = 0;
        for(let i = 0; i < digitJumps[cell].length; i++) {
            ans = (ans + dfs(remain-1, digitJumps[cell][i])) % mod;
        }

        cache[hash] = ans;
        return ans;
    }

    let ans = 0;
    for(let i = 0; i < 10; i++) {
        ans = (ans + dfs(n-1, i)) % mod;
    }

    return ans;
};