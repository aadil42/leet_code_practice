/**
 * Graph | BFS | Level-order-traverel
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/rotting-oranges/ 
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    // helper function
    const isOutOfBound = (r,c) => {
        if(r < 0 || r  === m) return true;
        if(c < 0 || c === n) return true;
        return false;
    }

    // helper function
    const isFreshOrange = (r,c) => {
        if(grid[r][c] === 1) return true;
    }

    const q = new Queue();
    const visited = new Set();
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const m = grid.length;
    const n = grid[0].length;
    let freshOranges = 0;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) {
                q.enqueue([i,j]);
                const orange = `${i}-${j}`;
                visited.add(orange);
            }
            if(grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }

    let time = 0;
    
    while(!q.isEmpty()) {
        const size = q.size();

        for(let i = 0; i < size; i++) {
            const rottenOrange = q.dequeue();
            const row = rottenOrange[0];
            const col = rottenOrange[1];

            for(let j = 0; j < directions.length; j++) {
                
                const nextRow = row + directions[j][0];
                const nextCol = col + directions[j][1];
                const nextOrange = `${nextRow}-${nextCol}`;

                if(!visited.has(nextOrange) && 
                  !isOutOfBound(nextRow, nextCol) && 
                  isFreshOrange(nextRow, nextCol)
                  ) {
                    freshOranges--;
                    visited.add(nextOrange);
                     q.enqueue([nextRow, nextCol]);
                  }

            }
        } 

        time++;       
    }

    if(freshOranges) return -1;
    if(!time) return 0;
    return time - 1;
};

var orangesRotting1 = function(grid) {
  // make height and width
    //   make queue
    //make fresh variable
    
    const height = grid.length;
    const width = grid[0].length;
    let freshOranges = 0;
    const BFSQueue = [];
    let minutes = 0;

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(grid[i][j]  === 2) BFSQueue.push([i, j]);
            if(grid[i][j] === 1) freshOranges++; 
        }
    }

    // bfs traversal 
    while(BFSQueue.length) {

        let size = BFSQueue.length;
        //this for loop will work as a visited set. like we did in graph traversals
        for(let i = 0; i < size; i++) {
        let [row, column] = BFSQueue.shift();
        explore(row - 1, column);
        explore(row + 1, column);
        explore(row, column - 1);
        explore(row, column + 1);
        }
        if(BFSQueue.length > 0) {
            minutes++;
        } 
    }

    function explore(row, column) {

        if(
            row < 0 ||
            column < 0 ||
            row > height - 1 ||
            column > width - 1 || 
            grid[row][column] !== 1
        ) return;

        freshOranges--;
        grid[row][column] = 2;
        BFSQueue.push([row, column]);
    }

    return !freshOranges ? minutes : -1;
};

const grid = [[2,1,1],
              [1,1,0],
              [0,1,1]];
console.log(orangesRotting(grid));