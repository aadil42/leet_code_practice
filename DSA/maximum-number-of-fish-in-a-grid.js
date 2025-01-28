/**
 * DFS | Graph
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/maximum-number-of-fish-in-a-grid
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {

    const ROW = grid.length;
    const COL = grid[0].length;

    const visited = new Set();
    const directions = [[1,0], [-1,0], [0,-1], [0,1]];

    const outOfBound = (r,c) => {
        if (r === ROW) return true;
        if (c === COL) return true;
        if (r < 0) return true;
        if (c < 0) return true;

        return false;
    }

    const dfs = (r,c) => {

        const hash = `${r}-${c}`;
        if (outOfBound(r,c)) return 0;
        if (visited.has(hash)) return 0;
        if (grid[r][c] === 0) return 0;

        visited.add(hash);

        let total = 0;
        for  (let i = 0; i < directions.length;  i++) {
            const [rowDir, colDir] = directions[i];
            total  += dfs(r+rowDir, c+colDir);
        }

        return total + grid[r][c];
    }

    let max = 0;

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j]) {
                const currMax = dfs(i,j);
                console.log(i, j, currMax);
                max = Math.max(max, currMax);
            }
        }
    }

    return max;
};