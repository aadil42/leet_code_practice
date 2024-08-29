/**
 * Graph | DFS 
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    
    const visited = new Set();

    const isPossible = (x,y,targetX,targetY) => {
        if(x === targetX) return true;
        if(y === targetY) return true;
        return false;
    }

    let gang = 0;
    
    const dfs = (index) => {
        visited.add(index);
        const [targetX, targetY] = stones[index];
        for(let i = 0; i < stones.length; i++) {
            const [x,y] = stones[i];
            if(!visited.has(i) && isPossible(x,y, targetX, targetY)) dfs(i);
        }
    }

    for(let i = 0; i < stones.length; i++) {
        if(!visited.has(i)) {
            dfs(i);
            gang++;
        }
    }

    return stones.length - gang;
};