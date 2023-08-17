/**
 * @class Dequeue
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


/**
 * Time O(n*m) | Space O(1)
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    const ROW = mat.length;
    const COL = mat[0].length;
    const dirs = [[1,0], [-1,0], [0,1], [0, -1]];
    const queue = new Dequeue();

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(!mat[i][j]) queue.addFront([i,j]);
            else mat[i][j] = Infinity; 
        }
    }

    const outOfBound = (r, c) => {
        if(r === ROW || c === COL || r < 0 || c < 0) return true;
        return false;
    } 

    while(!queue.isEmpty()) {
        const cell = queue.removeFront();
        const row = cell[0];
        const col = cell[1];
        for(let i = 0; i < dirs.length; i++) {
            const nextRow = row + dirs[i][0];
            const nextCol = col + dirs[i][1];
            if(outOfBound(nextRow, nextCol) || 
            mat[nextRow][nextCol] < mat[row][col] + 1) continue;

            mat[nextRow][nextCol] = mat[row][col] + 1;
            queue.addBack([nextRow, nextCol]);
        }
    }

    return mat;
};