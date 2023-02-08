/**
 * Time O(n^2) | Space O(n^2) | whatever the number of cell happens to be in our case it's n^2
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

var shortestPathBinaryMatrix = function(grid) {

    const COL = grid.length;
    const ROW = COL;
    const direction = [[1,1],[1,0],[0,1],[1,-1],
                     [-1,1],[0,-1],[-1,0],[-1,-1]];
    const visited = new Set();

    function invalid(r,c) {
        if(r === ROW || c === COL ||
           r < 0 || c < 0 ||
           grid[r][c]
        ) return true;
        return false;
    }
    const q = new Dequeue();
    q.addBack([0,0,1]);
    visited.add(0+'-'+0);

    while(!q.isEmpty()) {
        const [r,c,length] = q.removeFront();
        if(invalid(r,c)) continue;

        if(r === ROW - 1 && c === COL - 1 && !grid[r][c]) {
            return length;
        } 
        for(let i = 0; i < direction.length; i++) {
            const currentR = r + direction[i][0];
            const currentC = c + direction[i][1];
            const hash = currentR + "-" + currentC; 
            if(!visited.has(hash)) {
                visited.add(hash);
                q.addBack([currentR,currentC, length + 1]);
            }   
        }
    }

    return -1;
};