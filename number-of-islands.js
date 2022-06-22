var numIslands = function(grid) {
    
    let totalIsland = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                totalIsland++;
                dfs(i,j);
            }
        }
    }


    function dfs(row,column) {
        grid[row][column] = '0';

        if(row + 1 < grid.length && grid[row + 1][column] == "1") {
            dfs(row+1, column);
        }
        if(row - 1 >= 0 && grid[row - 1][column] == "1") {
            dfs(row-1, column);
        }

        if(column + 1 < grid[0].length && grid[row][column + 1] == "1") {
            dfs(row, column + 1);
        }

        if(column - 1 >= 0 && grid[row][column - 1] == "1") {
            dfs(row,column-1);
        }

        return;
    }

    return totalIsland;
};


const grid  = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

console.log(numIslands(grid));