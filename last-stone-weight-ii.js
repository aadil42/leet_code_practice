/**
 * Brute force
 * Time O(n^n) | Space O(n)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    
    const visited = new Set();
    const dfs = (remain) => {
        if(visited.size === stones.length) return remain;

        let min = Infinity;
        for(let i = 0; i < stones.length; i++) {
            if(!visited.has(i)) {
                visited.add(i);
                min = Math.min(min, dfs(Math.abs(remain - stones[i])));
                visited.delete(i);
            }
        }

        return min;
    }

    return dfs(0);
};