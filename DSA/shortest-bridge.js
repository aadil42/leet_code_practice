/**
 * DFS | BFS | Multi-source-BFS
 * Time O(n^2) | Space(n^2) 
 * https://leetcode.com/problems/shortest-bridge/
 * Queue is not defined in js internally. Have to run this code in leetcode environment. 
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    
    const n = grid.length;
    const islandA = new Set();
    const islandB = new Set();
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    const isOutOfBound = (r,c) => {
        if(r < 0 || r === n) return true;
        if(c < 0 || c === n) return true;
        return false;
    }

    const dfs = (node, island) => {
        const row = node[0];
        const col = node[1];

        const hash = `${row}-${col}`;
        if(island.has(hash)) return;
        if(!grid[row][col]) return;

        island.add(hash);

        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];

            if(isOutOfBound(nextRow, nextCol)) continue;
            dfs([nextRow, nextCol], island); 
        }
    }   

    // locate islands a and b.
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const hash = `${i}-${j}`;
            if(grid[i][j] === 0 || islandA.has(hash) || islandB.has(hash)) continue;
            if(islandA.size === 0) {
                dfs([i,j],islandA);
                continue;
            }
            dfs([i,j], islandB);
        }
    }

    const bfs = (sourceIsland, targetIsland) => {

        const q = new Queue();

        for(const cell of sourceIsland) {
            const row = +cell.split("-")[0];
            const col = +cell.split("-")[1];

            q.enqueue([row, col, 0]);
        }

        const visited = new Set();

        while(!q.isEmpty()) {

            const element = q.dequeue();
            const row = element[0];
            const col = element[1];
            const distance = element[2];
            
            
            const hash = `${row}-${col}`;
            if(visited.has(hash)) continue;
            visited.add(hash);
            if(grid[row][col] && targetIsland.has(hash)) return distance - 1;

            for(let i = 0; i < directions.length; i++) {

                const nextRow = row + directions[i][0];
                const nextCol = col + directions[i][1];
                const nextHash =  `${nextRow}-${nextCol}`;

                if(isOutOfBound(nextRow, nextCol) || sourceIsland.has(nextHash)) continue;
                q.enqueue([nextRow, nextCol, distance + 1]);
            }
        }

        return Infinity;
    }

    return bfs(islandA, islandB);
};

/**
 * Time O(n^2) | Space O(n^2) | both time and space complexity would be the number cell we have in the grid
 * @param {number[][]} grid
 * @return {number}
 */
class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount  > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] =  this.items[index -1];
            }
            this.count ++;
            this.items[0] = element;
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    peekFront(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }



    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }

}

var shortestBridge1 = function(grid) {
    
    const ROW = grid.length;
    const COL = ROW;
    const visited = new Set();
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const dfs = (r,c) => {
        const hash = r + "-" + c;
        if(!isValid(r,c) || visited.has(hash) || grid[r][c] === 0) return;
        visited.add(hash);
        directions.forEach((direction) => {
            dfs(r + direction[0], c + direction[1]);
        });
    }

    // console.log(visited);
    const isValid = (r,c) => {
        if(r === ROW || c === COL || 
            c < 0 || r < 0
            ) return false;

            return true;
    }

    const q = new Dequeue();
    

    const bfs = () => {
        let length = 0;
        while(!q.isEmpty()) {
            const len = q.size();
            for(let i = 0; i < len; i++) {
                let node = q.removeFront();
                node = node.split('-');
                r = +node[0];
                c = +node[1];
                for(let j = 0; j < directions.length; j++) {
                const hash = (r + directions[j][0]) + "-" + (c + directions[j][1]);
                 if(!isValid(r + directions[j][0],c + directions[j][1]) || visited.has(hash)) continue;
                 if(grid[r+directions[j][0]][c+directions[j][1]]) return length;
                    visited.add(hash);
                    q.addBack(hash);
                }
            }
            length++;
        }

        return length;
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(grid[i][j]) {
                dfs(i,j);
                for (const node of visited) {
                    q.addBack(node);
                }
                return bfs();
            }
        }
    }
};