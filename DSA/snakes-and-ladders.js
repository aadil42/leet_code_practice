/**
 * Graph | BFS
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/snakes-and-ladders/
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {

    const n = board.length;

    // helper function.
    const getNextRowCol = (nextCellNum) => {
        // subtracting 1 because we're counting 0 based.
        let row = Math.floor((nextCellNum-1)/n);
        let col = (nextCellNum-1)%n;
        
        if(row%2) {
            col = n - 1 - col;
        }

        return [row, col];
    }

    // helper function.
    const isOutOfBound = (row, col) => {
        if(row === n || col === n) return true;
        if(row < 0 || col < 0) return true;
        // console.log(row, col);
        return false;
    }


    const q = new Queue();
    const visited = new Set();

    // for easier traversel.
    board = board.reverse();

    q.enqueue([1,0]); // cellNum, moves

    while(!q.isEmpty()) {
        const size = q.size();

        for(let i = 0; i < size; i++) {

            const cell = q.dequeue();
            const currCellNum = cell[0];
            const moves = cell[1];

            for(let i = 1; i < 7; i++) {
        
                if(currCellNum+i > n**2) continue;
                const nextCell = currCellNum+i;
                const [nextRow, nextCol] = getNextRowCol(nextCell);

                if(nextCell === n**2 && board[nextRow][nextCol] === -1) return moves+1;

                // if there was a snake or ladder
                if(!isOutOfBound(nextRow, nextCol) && board[nextRow][nextCol] !== -1) {

                    const nextCell = board[nextRow][nextCol];

                    const [nextRow1, nextCol1] = getNextRowCol(nextCell);

                    if(nextCell === n**2 && board[nextRow1][nextCol1] === -1) return moves+1;

                    if(visited.has(nextCell)) continue;
                    visited.add(nextCell);

                    q.enqueue([nextCell, moves+1]);
                    continue;
                }

                if(visited.has(nextCell)) continue;
                visited.add(nextCell);

                q.enqueue([nextCell,moves+1]);
            }
        }
    }

    return -1;
};

/**
 * BFS
 * Time O()
 * @param {number[][]} board
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

var snakesAndLadders1 = function(board) {

    const visited = new Set();
    const dequeu = new Dequeue();
    board.reverse();
    const getRC = (square) => {
        const row =  Math.floor((square - 1) / board.length);
        let col =  (square - 1) % board.length;
        if(row%2) {
            col = board.length - 1 - col;
        }  
        return [row,col];
    }

    dequeu.addBack([1,0]);
    while(!dequeu.isEmpty()) {
        const [square, moves] = dequeu.removeFront();
        for(let i = 1; i < 7; i++) {
            let nextSquare = square + i;
            const [row,col] = getRC(nextSquare);
            if(board[row][col] != -1) {
                nextSquare = board[row][col];
            }
            if(nextSquare === board.length * board.length) {
                return moves + 1;
            }
            if(!visited.has(nextSquare)) {
                visited.add(nextSquare);
                dequeu.addBack([nextSquare, moves + 1]);
            }
        }
    }

    return -1;
};