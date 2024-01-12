/**
 * 
 * Recursion | DP
 * https://leetcode.com/problems/frog-jump/description/
 * 
 * Time O(n^2) | Space O(n^2)
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if(stones[1] !== 1) return false;

    const validPos = new Set();
    stones.forEach((stone) => validPos.add(stone));

    const target = stones[stones.length - 1];
    const cache = new Map();
    const dfs = (cp, pj) => {
        // console.log(cp,  pj);
        const hash = `${cp}-${pj}`;
        if(cache.has(hash)) return cache.get(hash);
        if(cp === target) return true;
        if(!validPos.has(cp)) return false;
        
        // choice1
        if(cp + (pj - 1) > cp && dfs(cp + (pj - 1), pj - 1)) return true;
        // choice2 
        if(dfs(cp + (pj), pj)) return true;
        // choice3
        if(dfs(cp + (pj + 1), pj + 1)) return true;
        
        cache.set(hash, false);
        return false;
    }

    return dfs(1, 1);
};