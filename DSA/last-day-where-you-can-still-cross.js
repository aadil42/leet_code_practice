/**
 * Brute Force | DFS
 * 
 * Time O(cells*(row*col)*col) | Space O(row*col)
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    
    const graph = [];
    for(let i = 0; i < row; i++) {
        const cRow = [];
        for(let j = 0; j < col; j++) {
            cRow.push(0);
        }
        graph.push(cRow);
    }

    const dirs = [[1,0], [-1,0], [0,-1], [0,1]];
    const canTravel = (r,c) =>  {
        if(c === col || r < 0 || c < 0 || graph[r][c]) return false;
        return true;
    }
    // console.log(graph);
    const visited = new Set();
    const dfs = (r,c) => {
        if(r === row) return true;
        if(!canTravel(r,c)) return false;
        
        if(visited.has(`${r}-${c}`)) return false;
        visited.add(`${r}-${c}`);

        for(let i = 0; i < dirs.length; i++) {
            if(dfs(r+ dirs[i][0], c + dirs[i][1])) return true;
        }
        return false;
    }

    let lastDay = 0;
    for(let i = 0; i < cells.length; i++) {
        const r = cells[i][0] - 1;
        const c = cells[i][1] - 1;
        
        graph[r][c] = 1;
        for(let i = 0; i < col; i++) {
            visited.clear();
            if(dfs(0,i)) {
                lastDay++;
                break;
            }
        }
    }
    return lastDay;

};