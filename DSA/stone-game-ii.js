/**
 * DP | Caching | Recursion
 * Time O(2*n^2) | Space O(2*n^2);
 * https://leetcode.com/problems/stone-game-ii
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    
    const cache = {}

    const dfs = (isAliceTurn, i, M) => {
        
        const hash = `${isAliceTurn}-${i}-${M}`;
        if(cache[hash] !== undefined) return cache[hash];

        if(i === piles.length) return 0;

        let res;
        if(isAliceTurn) {
            res = 0;
        } else {
            res = Infinity;
        }

        let total = 0;

        for(let X = 1; X < 2*M + 1; X++) {
            if(X+i > piles.length) break;

            total += piles[X+i-1];

            if(isAliceTurn) {
                res = Math.max(res, total + dfs(!isAliceTurn, X+i, Math.max(X,M)));
            }

            if(!isAliceTurn) {
                res = Math.min(res, dfs(!isAliceTurn, X+i, Math.max(X,M)));
            }
        }

        cache[hash] = res;
        return res;
    };

    return dfs(true, 0, 1);
};