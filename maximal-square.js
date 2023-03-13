/**
 * Recursion
 * Time O(n*m) | Space O(n*m)
 * 
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
    const ROW = matrix.length;
    const COL = matrix[0].length;
    const cache = {};

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            matrix[i][j] = +matrix[i][j];
        }
    }

    function dfs(i,j) {
        const key = i+'-'+j;
        if(cache[key]) return cache[key];
        if(i === ROW || j === COL) return 0;
        
        const bottom = dfs(i+1, j);
        const diganoal =  dfs(i+1,j+1);
        const right = dfs(i, j+1);
        if(!bottom || !diganoal || !right) {
            cache[key] = matrix[i][j];
        }

        if(matrix[i][j] !== 0) {
            if(bottom && diganoal && right) {
                if(diganoal == bottom && bottom == right) {
                    cache[key] = matrix[i][j] + bottom;
                } else {
                    cache[key] = Math.min(bottom, diganoal, right) + matrix[i][j];
                }
            }
        }  

        return cache[key]; 
    }

    dfs(0,0);
    let max = 0;
    for(let key in cache) {
        max = Math.max(max, cache[key]**2);
    }
    return max;
};