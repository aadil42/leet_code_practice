/**
 * Graph | DFS
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/find-all-groups-of-farmland
 *  
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const ROW = land.length;
    const COL = land[0].length;
    let visited = new Set();

    // helper methods.
    const outOfBound = (row, col) => {
        if(row < 0) return true;
        if(col < 0) return true;
        if(row === ROW) return true;
        if(col === COL) return true;
        return false;
    }

    const getBottomRightRC = (topLeftR, topLeftC) => {

        let maxRow = topLeftR;
        let maxCol = topLeftC;
        let cellCount = 0;

        const dfs = (r, c) => {
            if(outOfBound(r,c)) return;
            
            const hash = `${r}-${c}`;
            if(visited.has(hash)) return;
            if(land[r][c] !== 1) return;

            maxRow = Math.max(maxRow, r);
            maxCol = Math.max(maxCol, c);
            visited.add(hash);
            cellCount++;

            for(let i = 0; i < directions.length; i++) {
                const nextRow = r + directions[i][0];
                const nextCol = c + directions[i][1];
                dfs(nextRow, nextCol);
            }
        }

        dfs(topLeftR, topLeftC);

        const len = maxRow - topLeftR + 1;
        const width = maxCol - topLeftC + 1;

        if(len*width !== cellCount) return false;
        return [topLeftR, topLeftC, maxRow, maxCol];
    }

    const cellValues = [];

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(land[i][j] === 1 && !visited.has(`${i}-${j}`)) {
                const result =  getBottomRightRC(i, j);
                if(result) {
                    cellValues.push(result);
                }
            }
        }
    }

    return cellValues;
};