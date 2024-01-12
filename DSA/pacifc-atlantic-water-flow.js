var pacificAtlantic = function(heights) {
    
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

