/**
 * DP | Memoization | Recursion
 * Time O(n^3) | Space O(n^3)
 * https://leetcode.com/problems/cherry-pickup-ii/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {

    const cache = new Map();

    const ROW = grid.length;
    const COL = grid[0].length;

    const outOfBound = (r,c) => {
        if(r === ROW) return true;
        if(c === COL) return true;
        if(c < 0) return true;
        return false;
    }

    const dfs = (r,c1,c2) => {
        const hash =  `${r}-${c1}-${c2}`;

        if(outOfBound(r,c1) || outOfBound(r,c2)) return 0;
        if(cache.has(hash)) return cache.get(hash);

        const currCell = grid[r][c1] + ((c1 !== c2 && grid[r][c2]) || 0);

        let max = 0;
        for(let i = -1; i < 2; i++) {
            for(let j = -1; j < 2; j++) {
                max = Math.max(max, currCell + dfs(r+1, c1+i, c2+j));
            }
        }
        
        cache.set(hash, max);
        return max;
    }

    return dfs(0,0,COL-1);
};
