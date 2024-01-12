/**
 * Recursion with memoization
 * Time O(n*m) | Space (n);
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    
    const hashMap = {};
    const dir = [[-1, 1],[0,1],[1,1]];
    let maxSteps = 0;
    
    const dfs = (row,col,pre) => {
        const hash = row + '#' + col;
        if(row >= grid.length || col >= grid[0].length || row < 0 || col < 0) return 0;
        if(hashMap[hash]) return hashMap[hash];
        if(pre >= grid[row][col]) {
            // console.log(row,col,pre, grid[row][col], 'fromif');
            return 0;

        } 
        // console.log(hash, count);
        hashMap[hash] = 0;
        for(let i = 0; i < dir.length; i++) {
            hashMap[hash] = Math.max(dfs(row + dir[i][0], col + dir[i][1], grid[row][col]) + 1, hashMap[hash]);
        }
        return hashMap[hash];
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < dir.length; j++) {
            const row = i + dir[j][0];
            const col = 1;
            // console.log(row,col);
            maxSteps = Math.max(maxSteps, dfs(row,col,grid[i][0]));
        }
        // console.log('---');
    }
        
    console.log(hashMap);
    return maxSteps;
};