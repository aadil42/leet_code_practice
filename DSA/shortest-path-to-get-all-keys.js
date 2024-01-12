/**
 * 
 * BFS
 * k = number o keys
 * Time O(m*n*k) | Space O(m*n*k)
 * @param {string[]} grid
 * @return {number}
 */

class Point {
    constructor(r,c,keys) {
        this.r = r;
        this.c = c;
        this.keys = keys;
        this.hash = `${r}#${c}#${JSON.stringify(this.keys)}`;
    }
} 

var shortestPathAllKeys = function(grid) {
    // get the starting point.
    // get total key number
    // make key set.
    // run dfs and check if the key set is equal to total key number.

    const graph = grid.map((row) => {
      return [...row];
    });
    
    const ROW = graph.length;
    const COL = graph[0].length;

    const isLowerCase = (char) => {
      return (char >= 'a' && char <= 'z');
    }
    const isUpperrCase = (char) => {
      return (char >= 'A' && char <= 'Z');
    }
    const toLowerCase = (char) => {
      return char.toLowerCase()
    }
    const outOfBounds = (r,c) => {
      if(r === ROW || r === -1 || c === COL || c === -1) return true;
      return false;
    }
    const isWall = (r,c) => {
      return graph[r][c] === '#';
    }
    
    const queue = new Queue();

    let totalKeys = 0;

    const visited = new Set();


    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[0].length; j++) {
            if(graph[i][j] === '@') {
                const point = new Point(i,j,{});
                queue.enqueue(point);
                visited.add(point.hash);
            }
            if(isLowerCase(graph[i][j])) {
                totalKeys += 1;
            }
        }
    }   
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    let steps = 0;
    while(!queue.isEmpty()) {
        
        const n = queue.size();
        for(let i = 0; i < n; i++) {
            const {r, c, keys, hash} = queue.dequeue();
            for(let i = 0; i < dirs.length; i++) {
                const nextR = r + dirs[i][0];
                const nextC = c + dirs[i][1];
                const newKeys = Object.assign({}, keys);
                const newPoint = new Point(nextR, nextC, newKeys);

                if(outOfBounds(nextR, nextC) || isWall(nextR, nextC) || visited.has(newPoint.hash)) continue;
                
                if(isLowerCase( graph[nextR][nextC] ) ) {
                    newKeys[graph[nextR][nextC]] = true;
                    if(Object.keys(newKeys).length === totalKeys) return steps+1;
                }

                if(isUpperrCase(graph[nextR][nextC])) {
                    if(!newKeys[toLowerCase(graph[nextR][nextC])]) {
                        continue;
                    }
                }

                visited.add(newPoint.hash);
                queue.enqueue(newPoint);
            }
        }

        steps++;
    }

    return -1;
};