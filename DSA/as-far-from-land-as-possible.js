/**
 * Brute Force | BFS
 * Time O(n^4) | Space O(n^2)
 * https://leetcode.com/problems/as-far-from-land-as-possible/
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const outOfBound = (r, c) => {

        if(r < 0 || r === grid.length) return true;
        if(c < 0 || c === grid.length) return true;
        return false;
    }

    const bfs = (node) => {

        const q = new Queue();
        q.enqueue(node);

        const visited = new Set();

        let pathLen = 0;

        while(!q.isEmpty()) {
            const size = q.size();

            for(let i = 0; i < size; i++) {
                
                const node = q.dequeue();
                if(visited.has(node.join("-"))) continue;
                visited.add(node.join("-"));
                
                const row = node[0];
                const col = node[1];

                if(grid[row][col] === 1) return pathLen;
                
                for(let j = 0; j < directions.length; j++) {
                    const nextRow = row + directions[j][0];
                    const nextCol = col + directions[j][1];

                    if(outOfBound(nextRow, nextCol)) continue;
                    q.enqueue([nextRow, nextCol]);
                }
            }

            pathLen++;
        }

        return -1;
    }

    let maxDistance = -1;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            if(grid[i][j] === 0) {
                maxDistance = Math.max(maxDistance, bfs([i,j]));
            }
        }
    }

    return maxDistance;
};