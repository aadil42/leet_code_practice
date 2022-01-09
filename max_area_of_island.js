
let visited = [];
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  
  let row = grid.length;
  let column = grid[0].length;

  for(let i = 0; i < row; i++) {
      let temp = [];
      for(let j = 0; j < column; j++) {
        temp.push(false);
      }
      visited.push(temp);
  }

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
        if(grid[i][j] == 1) {
          maxArea  = Math.max(maxArea, check1s(i, j, grid));
        }
    }
  }

  return maxArea;
};

function check1s(i, j, grid) {

    if(
        i > (grid.length - 1) ||
        j > (grid[0].length - 1) ||
        i < 0 ||
        j < 0 ||
        grid[i][j] == 0 ||
        visited[i][j]
     ) {
         return 0;
     }

     visited[i][j] = true;
     return 1 + check1s(i+1, j, grid) + check1s(i-1, j, grid) + check1s(i, j+1, grid) + check1s(i, j-1, grid);
}
const input = [[1,1,0,1,1],
               [1,0,0,0,0],
               [0,0,0,0,1],
               [1,1,0,1,1]];

console.log(maxAreaOfIsland(input));