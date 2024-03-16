/**
 * Graph | BFS 
 * Time O(10^4) |  Space O(10^4)
 * https://leetcode.com/problems/open-the-lock/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    
    const directions = [
        [1,0,0,0], 
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1],
        [-1,0,0,0],
        [0,-1,0,0],
        [0,0,-1,0],
        [0,0,0,-1]
    ];

    const forbidden = new Set(deadends);

    if(forbidden.has("0000")) return -1;
    
    const q = new Queue(); // Queue doesn't exsit here. Run it in leetcode.
    const visited = new Set();

    q.enqueue([[0,0,0,0], 0]);
    
    while(!q.isEmpty()) {

        const node = q.dequeue();
        const sequence = node[0];
        const turns = node[1];
        
        if(visited.has(sequence.join(""))) continue;
        visited.add(sequence.join(""));
        
        // console.log(sequence);
        if(sequence.join("") === target) return turns;

        for(let i = 0; i < directions.length; i++) {
            const nextSequence = sequence.slice(0);

            for(let j = 0; j < 4; j++) {
                nextSequence[j] += directions[i][j];
                // if we go behind 0 we get back to 9.
                if(nextSequence[j] === -1) nextSequence[j] = 9;
                // if we go over 9 then we get back to 0.
                if(nextSequence[j] === 10) nextSequence[j] = 0;
            }   
            if(!forbidden.has(nextSequence.join(""))) q.enqueue([nextSequence, turns+1]);
        }
    }

    return -1;
};

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
 *  Graph | BFS 
 *  Time O(10^4) |  Space O(10^4)
 *  https://leetcode.com/problems/open-the-lock/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock1 = function(deadends, target) {
    
    const visited = new Set(deadends);
    if(visited.has("0000")) return -1;
    const queue = new Dequeue();
    
    const childers = (combination) => {
        const result = [];
        for(let  i = 0; i < 4;  i++) {
            const turn1 = combination.slice(0,i) + (+combination[i] + 1) % 10 + combination.slice(i+1);
            const turn2 = combination.slice(0,i) + (combination[i] - 1 + 10) % 10 + combination.slice(i+1);
            result.push(turn1);
            result.push(turn2);
        }
        return result;
    }

    queue.addFront(['0000',0]); // [combination, turn];
    while(!queue.isEmpty()) {
        const [combination, turn] = queue.removeFront();
        if(combination === target) return turn;

        const childrens = childers(combination);
        for(let i = 0; i < childrens.length; i++) {
            if(!visited.has(childrens[i])) {
                visited.add(childrens[i]);
                queue.addBack([childrens[i],turn+1]);
            }
        }
    }

    return -1;
};

// const deadends = ["0201","0101","0102","1212","2002"];
// const target = "0202";
// console.log(openLock(deadends, target));