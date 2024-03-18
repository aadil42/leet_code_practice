/**
 * Graphs | DFS
 * Time O((n^2) * 2) | Space O(n^2)
 * https://leetcode.com/problems/pacific-atlantic-water-flow/ 
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    
    const ROW = heights.length;
    const COL = heights[0].length;
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const isPecific = (row, col) => {
        if(row < 0) return true;
        if(col < 0) return true;
        return false;
    }

    const isAtlantic = (row, col) => {
        if(row === ROW) return true;
        if(col === COL) return true;
        return false;
    }       
    
    const outOfBound = (row, col) => {
        if(row === ROW || col === COL) return true;
        if(row < 0 || col < 0) return true;
        return false;
    }

    const dfs = (row, col, visited, pecific) => {

        const cell = `${row}-${col}`;
        if(visited.has(cell)) return false;
        visited.add(cell);

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];

            if(pecific && isPecific(nextRow, nextCol)) return true;
            if(!pecific && isAtlantic(nextRow, nextCol)) return true;

            if(outOfBound(nextRow,nextCol)) continue;

            if(heights[nextRow][nextCol] <= heights[row][col]) {
                if(dfs(nextRow, nextCol, visited, pecific)) return true;
            }
            
        }

        return false;
    }

    const result = [];

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(dfs(i,j,new Set(), true) && dfs(i,j,new Set(), false)) result.push([i,j]);
        }
    }

    return result;
};

/**
 * 
 * DFS | Graph
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/pacific-atlantic-water-flow
 * 
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic1 = function(heights) {
    
    const pacific = new Set();
    const atlantic = new Set();
    
    const rows = heights.length;
    const columns = heights[0].length;
    const result = [];
    
    function dfs(row,column,preHeight,visited) {
        const cordinate = makeString(row,column);
        if(visited.has(cordinate) ||
           row == rows ||
           column == columns ||
           row < 0 ||
           column < 0 ||
           heights[row][column] < preHeight 
          ) return;
        
        
        visited.add(cordinate);
        dfs(row + 1, column, heights[row][column], visited);
        dfs(row - 1, column, heights[row][column], visited);
        dfs(row, column + 1, heights[row][column], visited);
        dfs(row, column - 1, heights[row][column], visited);
    }
    
    for(let i = 0; i < columns; i++) {
        dfs(0, i, -1, pacific);
        dfs(rows - 1, i, -1, atlantic);
    }
    
    for(let i = 0; i < rows; i++) {
        dfs(i, 0, -1, pacific);
        dfs(i, columns - 1, -1, atlantic);
    }
    
    
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const cordinate = makeString(i,j);
            if(atlantic.has(cordinate) && pacific.has(cordinate)) {
                result.push([i,j]);
            }
        }
    }
    
    return result;
};

function makeString(i,j) {
        const temp = i.toString();
        const temp1 = j.toString();
        
        let result = temp + '-' + temp1;
        
        return result;
}
