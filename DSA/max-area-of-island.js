/** DFS
 * Time O(n*m) || Space O(1);
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const row = grid.length;
    const column = grid[0].length;
    let maxArea = 0;
    let currentArea = 0;
    for(let i = 0; i < row;  i++) {
        for(let j = 0; j < column; j++) {
            dfs(i,j);
            maxArea = Math.max(maxArea,currentArea);
            currentArea = 0;
        }
    }

    // don't declare currentArea var inside dfs!! make it global.
    function dfs(r,c) {
        
        if(
            r === row ||
            r < 0 || 
            c === column ||
            c < 0 ||
            grid[r][c] === 0
        ) return 0;

        currentArea++;
        grid[r][c] = 0;
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r,c+1);
        dfs(r,c-1);
    }
    return maxArea;
};