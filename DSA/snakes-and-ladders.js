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

var snakesAndLadders = function(board) {

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