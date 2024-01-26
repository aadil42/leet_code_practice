/**
 * DP | Recursion | DFS
 * Time O(n^3) | Space O(n^3)
 * https://leetcode.com/problems/out-of-boundary-paths/
 * 
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    
    const ROW = m;
    const COL = n;
    const mod = 10**9 + 7;

    const cache = new Map();

    const didReach = (r,c) => {
        if(r < 0) return true;
        if(r === ROW) return true;
        if(c < 0) return true;
        if(c === COL) return true;
        return false;
    }

    const dfs = (r,c, moveLeft) => {
        const hash = `${r}-${c}-${moveLeft}`;

        if(cache.has(hash)) return cache.get(hash);
        if(didReach(r,c)) return 1;
        if(moveLeft === 0) return 0;

        const ways = (
            ((dfs(r+1, c, moveLeft-1)%mod) +
            (dfs(r-1, c, moveLeft-1)%mod) +
            (dfs(r, c+1, moveLeft-1)%mod) +  
            (dfs(r, c-1, moveLeft-1)%mod))%mod
        );

        cache.set(hash, ways);
        return ways;
    }

    return dfs(startRow,startColumn, maxMove);
};