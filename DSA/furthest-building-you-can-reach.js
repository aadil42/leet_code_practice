/**
 * DP | Memoization | Recursion
 * Time O(n^3) | Space O(n^3)
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 * Won't pass on leetcode. But, it's a good solution.
 * 
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {

    const cache = new Map();
    const dfs = (i, leftLadders, leftBricks) => {

        const hash = `${i}-${leftLadders}-${leftBricks}`;

        if(cache.has(hash)) return cache.get(hash);
        
        if(i === heights.length - 1) return 0;

        if(heights[i] < heights[i+1]) {
            let choice1 = 0;
            let choice2 = 0;
            const diff = heights[i+1]  - heights[i];
            if(leftLadders) {
                 choice1 = 1 + dfs(i+1, leftLadders-1, leftBricks);
            }
            if(leftBricks >= diff) {
                choice2 = 1 + dfs(i+1, leftLadders, leftBricks - diff);
            }

            const result = Math.max(choice1, choice2);
            cache.set(hash, result);
            return result;
        }

        const result = 1 + dfs(i+1, leftLadders, leftBricks);
        cache.set(hash, result);
        return result;
    }

    return dfs(0, ladders, bricks);
};